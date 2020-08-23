package main

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"text/template"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gorilla/mux"
	"github.com/machinebox/graphql"
	salesrepo "gitlab.lan/Rightnao-site/sale-tools/internal/repository"
	sales "gitlab.lan/Rightnao-site/sale-tools/pkg"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"gopkg.in/gomail.v2"
)

var (
	httpPort = ":9095"

	jwtKey = []byte("test_key")

	smtpMailServerAddress = "192.168.1.66:25"
	loginMailServer       = "vova@test.com"
	passwordMailServer    = "12345678"

	dbAddress = "192.168.1.105:27017"

	repo        *salesrepo.Repository
	gqlEndpoint = "http://testing.lan/graphql"

	folderWithFront = "./web/app"

	qglClient *graphql.Client
)

// Claim for jwt payload
type Claim struct {
	UserID   string `json:"user_id"`
	Username string `json:"username"`
	jwt.StandardClaims
}

func main() {
	log.Println("starting...")
	var err error
	repo, err = salesrepo.NewRepository(
		&salesrepo.Settings{
			DBAddresses:             []string{dbAddress},
			User:                    "",
			Password:                "",
			DBName:                  "sales_db",
			CompaniesCollectionName: "companies",
			JobsCollectionName:      "jobs",
			UsersCollectionName:     "users",
			CommentsCollectionName:  "comments",
			HistoriesCollectionName: "histories",
		},
	)

	if err != nil {
		log.Fatal(err)
	}
	defer repo.Close()
	log.Println("connected to db")

	qglClient = graphql.NewClient(gqlEndpoint)

	r := mux.NewRouter()

	r.HandleFunc("/api/auth", auth).Methods("POST")
	r.Handle("/api/companies", checkToken(getCompanies)).Methods("GET")
	r.Handle("/api/email", checkToken(sendEmail)).Methods("POST")
	r.Handle("/api/companies/{company_id}", checkToken(getCompanyInfo)).Methods("GET")
	r.Handle("/api/companies/{company_id}/jobs", checkToken(getCompanyJobs)).Methods("GET")
	r.Handle("/api/companies/{company_id}", checkToken(changeCompanyInfo)).Methods("PUT")
	r.Handle("/api/contact_person/{company_id}", checkToken(changeContactPerson)).Methods("PUT")
	r.Handle("/api/companies/{company_id}/stage", checkToken(changeCompanyStage)).Methods("PUT")
	r.Handle("/api/companies/{company_id}/comments", checkToken(getCompanyComments)).Methods("GET")
	r.Handle("/api/companies/{company_id}/comments", checkToken(addCompanyComments)).Methods("POST")
	r.Handle("/api/companies/{company_id}/comments/{comment_id}", checkToken(editCompanyComment)).Methods("PUT")
	r.Handle("/api/companies/{company_id}/comments/{comment_id}", checkToken(removeCompanyComment)).Methods("DELETE")
	r.Handle("/api/companies/{company_id}/history", checkToken(getCompanyHistories)).Methods("GET")
	r.Handle("/api/companies/{company_id}/history", checkToken(addCompanyHistory)).Methods("POST")

	r.HandleFunc("/api/graphql/cities/{city_name}", getCitiesByName).Methods("GET")
	r.HandleFunc("/api/graphql/country_codes", getListOfCountryCodes).Methods("GET")
	r.HandleFunc("/api/graphql/cities/{country_id}/{city_name}", getCitiesByCountry).Methods("GET")

	// process frontend
	serverHandler := func(w http.ResponseWriter, r *http.Request) {
		if _, err := os.Stat(folderWithFront + r.URL.Path); err != nil {
			http.ServeFile(w, r, folderWithFront+"/index.html")
			return
		}
		http.ServeFile(w, r, folderWithFront+r.URL.Path)
	}

	r.NotFoundHandler = r.NewRoute().HandlerFunc(serverHandler).GetHandler()

	log.Println("server started")

	err = http.ListenAndServe(httpPort, r)
	if err != nil {
		fmt.Println(err)
	}
}

func auth(w http.ResponseWriter, r *http.Request) {
	type Credentials struct {
		Username string `bson:"username"`
		Password string `bson:"password"`
	}

	var cred Credentials

	type User struct {
		ID       primitive.ObjectID `bson:"_id"`
		Username string             `bson:"username"`
		Password string             `bson:"password"`
	}

	var user User

	err := json.NewDecoder(r.Body).Decode(&cred)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	// check password
	err = repo.UsersCollection.FindOne(r.Context(), bson.M{
		"username": cred.Username,
	}).Decode(&user)
	if err != nil {
		if errors.Is(err, mongo.ErrNoDocuments) {
			w.WriteHeader(http.StatusForbidden)
			return
		}
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if user.Password != cred.Password {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	expTime := time.Now().AddDate(0, 0, 14) // 14 days

	signedKey, err := jwt.NewWithClaims(jwt.SigningMethodHS256, &Claim{
		UserID:   user.ID.Hex(),
		Username: user.Username,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expTime.Unix(),
		},
	}).SignedString(jwtKey)

	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   signedKey,
		Expires: expTime,
	})

	fmt.Fprint(w, signedKey)

}

func getCompanies(w http.ResponseWriter, r *http.Request) {

	var status sales.SaleStatus
	params := getPaginationFromParam(r)
	statusParam, ok := r.URL.Query()["status"]

	// @TOCHNAGE
	if ok {

		switch statusParam[0] {
		case "any":
			status = sales.SaleStatusAny
		case "pre_sale":
			status = sales.SaleStatusPreSale
		case "sale":
			status = sales.SaleStatusSale
		}
	}

	res, err := repo.GetCompanies(r.Context(), params, status)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(res)
	if err != nil {
		log.Println(err)
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)

}

func sendEmail(w http.ResponseWriter, r *http.Request) {
	type EmailMessage struct {
		Recieviers []string `json:"recieviers"`
		Subject    string   `json:"subject"`
		Text       string   `json:"text"`
	}

	var email EmailMessage

	err := json.NewDecoder(r.Body).Decode(&email)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	t := template.New("template.html")

	t, err = t.ParseFiles("data/template.html")
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	tpl := bytes.Buffer{}
	if err := t.Execute(&tpl, email.Text); err != nil {
		log.Println(err)
	}

	m := gomail.NewMessage()
	m.SetHeader("From", loginMailServer)
	m.SetHeader("To", email.Recieviers...)
	m.SetHeader("Subject", email.Subject)
	m.SetBody("text/html", tpl.String())
	m.Attach("data/template.html")
	// m.AddAlternative("text/plain", "test") // TODO: add later

	host, port, err := net.SplitHostPort(smtpMailServerAddress)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	portInt, err := strconv.Atoi(port)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	d := gomail.NewDialer(host, portInt, loginMailServer, passwordMailServer)
	d.TLSConfig = &tls.Config{
		InsecureSkipVerify: true,
	}
	if err := d.DialAndSend(m); err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func getCompanyJobs(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	res, err := repo.GetCompanyJobs(r.Context(), id)

	if res == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func getCompanyInfo(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	res, err := repo.GetCompanyInfo(r.Context(), id)

	if res == nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func changeCompanyInfo(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	company := sales.Company{}

	err := json.NewDecoder(r.Body).Decode(&company)
	if err != nil {
		log.Println(err)
		w.Write([]byte(err.Error()))
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = repo.ChangeCompanyInfo(r.Context(), id, company)
	if err != nil {
		log.Println(err)
		w.Write([]byte(err.Error()))
		w.WriteHeader(http.StatusBadRequest)
	}
}

func changeContactPerson(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	user := sales.User{}

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	req := graphql.NewRequest(`
		mutation Register ($input: RegistrationInput!) {
			Register(input: $input){
				id
				token
				status
			}
		}
		`)

	req.Var("input", map[string]interface{}{
		"firstname":  user.FirstName,
		"lastname":   user.Lastname,
		"email":      user.Email,
		"username":   user.Username,
		"password":   user.Password,
		"birthday":   user.Birthday,
		"country":    user.Country,
		"language":   user.Language,
		"gender":     user.Gender,
		"invited_by": r.Context().Value("userID"),
	})

	var resp interface{}
	var token string
	var userID string
	err = qglClient.Run(r.Context(), req, &resp)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	idObj, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}

	if m, ok := resp.(map[string]interface{}); ok {
		if m1, ok := m["Register"].(map[string]interface{}); ok {

			if t, ok := m1["token"].(string); ok {
				token = t
			}

			if s, ok := m1["id"].(string); ok {
				userID = s
				objID, err := primitive.ObjectIDFromHex(s)
				if err != nil {
					log.Println(err)
					w.WriteHeader(http.StatusBadRequest)
					w.Write([]byte(err.Error()))
					return
				}
				user.ID = objID
			}
		}
	}

	_, err = repo.CompaniesCollection.UpdateOne(r.Context(),
		bson.M{
			"_id": idObj,
		},
		bson.M{
			"$addToSet": bson.M{
				"contact_persons": user,
			},
		},
	)

	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	err = registerCompany(token, id, userID)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func registerCompany(token, companyID, userID string) error {

	res, err := repo.GetCompanyInfo(context.TODO(), companyID)
	if err != nil {
		return err
	}

	req := graphql.NewRequest(`
		mutation RegisterCompany ($input: RegistrationCompanyInput!) {
			RegisterCompany(input: $input){
				id
			}
		}`,
	)
	req.Header.Set("Authorization", token)

	data := map[string]interface{}{
		"name":       res.Name.(string),
		"url":        companyID,      //strings.ToLower(strings.ReplaceAll(res.Name.(string), " ", "_")),
		"industry":   "1",            // @TEMP
		"type":       "type_unknown", // @TEMP
		"invited_by": userID,
	}

	/// Addresses
	var address = res.Addresses

	// Postal code ( ZIP )
	if address.PostalCode != "" {
		data["zip"] = address.PostalCode
	} else {
		data["zip"] = "0000"
	}

	// Appartament
	if address.Apartment != "" {
		data["address"] = address.Apartment
	}

	// City
	if city := address.Location.City; city != nil {
		if city.ID != "" {
			data["city_id"] = city.ID
		} else {
			data["city_id"] = "611717"
		}
	} else {
		data["city_id"] = "611717"
	}

	// Email
	if len(res.Emails) > 0 {
		for _, email := range res.Emails {
			if email != "" {
				data["email"] = email
			}
		}
	} else {
		data["email"] = token[:5] + "@rightnao.com"
	}

	// Phone
	if len(res.Phones) > 0 {
		for _, phone := range res.Phones {
			data["phone"] = map[string]interface{}{
				"country_code_id": 88, // @Temp
				"number":          phone.Number,
			}
		}
	} else {
		data["phone"] = map[string]interface{}{
			"country_code_id": 88,
			"number":          "599000000",
		}
	}

	// Websites
	websites := make([]string, 0, len(res.Website))
	for _, website := range res.Website {
		websites = append(websites, website)
	}

	req.Var("input", data)

	var resp interface{}
	var prodCompanyID string
	err = qglClient.Run(context.TODO(), req, &resp)
	if err != nil {
		return err
	}

	if m, ok := resp.(map[string]interface{}); ok {
		if m1, ok := m["RegisterCompany"].(map[string]interface{}); ok {
			if s, ok := m1["id"].(string); ok {
				prodCompanyID = s
			}
		}
	}

	err = registerJobs(companyID, prodCompanyID, token)
	if err != nil {
		return err
	}

	return nil
}

func registerJobs(preCompanyID, companyID, token string) error {
	jobs, err := repo.GetCompanyJobs(context.TODO(), preCompanyID)
	log.Println(preCompanyID)
	if err != nil {
		log.Print(err)
		// <return err
	}

	if jobs != nil {
		for _, job := range jobs {
			err = registerJob(companyID, token, job)
			if err != nil {
				log.Print(err)
				// return err
			}
		}
	}

	return nil

}

func registerJob(companyID, token string, job *sales.Job) error {

	req := graphql.NewRequest(`
		mutation PostJob (
				$companyId: String!
				$details: JobDetailsInput!
				$meta: JobMetaInput!
			) {
				PostJob(
					companyId: $companyId
					details: $details
					meta: $meta
				)
			{
				id
			}
		}`,
	)
	req.Header.Set("Authorization", token)
	req.Var("companyId", companyID)
	req.Var("meta", map[string]interface{}{
		"advertisement_countries": []string{"GE"},
		"renewal":                 1,
		"amount_of_days":          30,
		"anonymous":               false,
		"num_of_languages":        len(job.Description),
		"currency":                "GEL",
	})

	details := map[string]interface{}{
		"title":                      job.Title,
		"country":                    job.CountryID,
		"location_type":              "Location_Any",
		"job_functions":              []string{"none"},
		"employment_types":           []string{"FullTime"}, // @TOCHAGE job.EmploymentType
		"number_of_positions":        job.NumberofPositions,
		"additional_compensation":    []string{"any"},
		"city":                       "611717", // @TEMP
		"cover_letter":               false,
		"is_willing_to_work_remotly": false,
	}

	if len(job.Description) > 0 {
		descriptions := make([]sales.JobDescription, 0, len(job.Description))

		for _, d := range job.Description {

			descriptions = append(descriptions, sales.JobDescription{
				Language:    d.Language,
				Description: d.Description,
				WhyUs:       "",
			})

		}

		details["descriptions"] = descriptions
	} else {
		details["descriptions"] = []sales.JobDescription{
			sales.JobDescription{
				Language:    "en",
				Description: "",
				WhyUs:       "",
			},
		}
	}

	if req, ok := job.Required.(map[string]interface{}); ok {
		experience := req["experience"]
		license := req["license"]
		education := req["education"]

		details["required"] = map[string]interface{}{
			"experience": strings.ToLower(strings.ReplaceAll(experience.(string), " ", "_")),
			"license":    license,
			"education":  []string{education.(string)},
		}

	}

	// Currency
	if job.SalaryCurrency != "" {
		details["salary_currency"] = job.SalaryCurrency
	}

	// Salary Min
	if job.SalaryMin > 0 {
		details["salary_min"] = job.SalaryMin
	}

	// Salary Max
	if job.SalaryMax > 0 {
		details["salary_max"] = job.SalaryMax
	}

	// @TODO

	// if len(job.City) > 0 {
	// 	if c, ok := job.City[0].(map[string]interface{}); ok {
	// 		details["city"] = ""
	// 	}
	// }

	req.Var("details", details)

	var resp interface{}
	err := qglClient.Run(context.TODO(), req, &resp)
	if err != nil {
		return err
	}

	return nil

}

func changeCompanyStage(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	type Status struct {
		Status sales.SaleStatus `json:"status"`
	}
	var status Status

	err := json.NewDecoder(r.Body).Decode(&status)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	log.Println(status.Status)

	err = repo.ChangeCompanyStage(r.Context(), id, status.Status)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}
}

func getCompanyComments(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	params := getPaginationFromParam(r)

	res, err := repo.GetCompanyComments(r.Context(), id, params)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func getCompanyHistories(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["company_id"]
	params := getPaginationFromParam(r)

	res, err := repo.GetCompanyHistories(r.Context(), id, params)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(res)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)
}

func addCompanyComments(w http.ResponseWriter, r *http.Request) {
	companyID := mux.Vars(r)["company_id"]
	comment := sales.Comment{
		CreatedAt: time.Now(),
	}
	id := comment.GenerateID()
	comment.SetOwnerID(r.Context().Value("userID").(string))

	err := json.NewDecoder(r.Body).Decode(&comment)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = repo.AddCompanyComments(r.Context(), companyID, comment)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	js, err := json.Marshal(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(js)

	return

}

func removeCompanyComment(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	err := repo.RemoveCompanyComment(r.Context(), params["company_id"], params["comment_id"])
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
	}

}

func editCompanyComment(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	var comment = struct {
		Text string `json:"text"`
	}{}

	err := json.NewDecoder(r.Body).Decode(&comment)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = repo.EditCompanyComment(r.Context(),
		params["company_id"],
		params["comment_id"],
		comment.Text,
	)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusBadRequest)
	}

}

func addCompanyHistory(w http.ResponseWriter, r *http.Request) {
	companyID := mux.Vars(r)["company_id"]
	history := sales.History{
		CreatedAt: time.Now(),
	}
	history.GenerateID()
	history.SetOwnerID(r.Context().Value("userID").(string))

	err := json.NewDecoder(r.Body).Decode(&history)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	err = repo.AddCompanyHistory(r.Context(), companyID, history)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	return

}

func getCitiesByName(w http.ResponseWriter, r *http.Request) {
	cityName := mux.Vars(r)["city_name"]

	req := graphql.NewRequest(`
		query getListOfAllCities($search_city: SearchAllCityInput!){
			getListOfAllCities(search_city:$search_city){
				id
				city
				country
				subdivision
			}
		}
		`)

	req.Var("search_city", map[string]interface{}{
		"find_city": cityName,
	})

	var resp interface{}

	err := qglClient.Run(r.Context(), req, &resp)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	js, err := json.Marshal(resp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(js)

}

func getListOfCountryCodes(w http.ResponseWriter, r *http.Request) {

	req := graphql.NewRequest(`
		query getListOfCountryCodes {
			getListOfCountryCodes {
				id
				country_code
				country

			}
		}
		`)

	var resp interface{}
	err := qglClient.Run(r.Context(), req, &resp)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	if ls, ok := resp.(map[string]interface{}); ok {

		js, err := json.Marshal(ls["getListOfCountryCodes"])
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Write(js)
	}

}

func getCitiesByCountry(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)

	req := graphql.NewRequest(`
		query getListOfCities($search_city: SearchCityInput!){
			getListOfCities(search_city: $search_city, pagination: { first: 20 }){
				id
				city
				subdivision
				country
			}
		}
		`)

	req.Var("search_city", map[string]interface{}{
		"country_id": params["country_id"],
		"find_city":  params["city_name"],
	})

	var resp interface{}

	err := qglClient.Run(r.Context(), req, &resp)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	js, err := json.Marshal(resp)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(js)

}

/// Helper ///
func getPaginationFromParam(r *http.Request) sales.Pagination {
	first := 10
	after := 0

	for k, v := range r.URL.Query() {
		if len(v) > 0 {
			// First
			if k == "first" {
				firstNumber, err := strconv.Atoi(v[0])
				if err == nil {
					first = firstNumber
				}
			}
			// After
			if k == "after" {
				afterNumber, err := strconv.Atoi(v[0])
				if err == nil {
					after = afterNumber
				}
			}

		}
	}

	return sales.Pagination{
		First: first,
		After: after,
	}
}

func checkToken(next http.HandlerFunc) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookie, err := r.Cookie("token")
		if err != nil {
			if errors.Is(err, http.ErrNoCookie) {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			log.Println("error: retriving token", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		var claims Claim

		token, err := jwt.ParseWithClaims(cookie.Value, &claims, func(token *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})
		if err != nil {
			if errors.Is(err, http.ErrNoCookie) {
				w.WriteHeader(http.StatusUnauthorized)
				return
			}

			log.Println("error: parsing jwt token:", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		if !token.Valid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}

		ctx := context.WithValue(r.Context(), "userID", claims.UserID)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}
