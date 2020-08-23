import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { IUserLogin, ISendEmail, ICompanyEdit } from './shared/models/sales.interface';
import { parseJWT } from './utiles';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

   $notification: Subject<{ messsage: string, link: string }> = new Subject<{ messsage: string, link: string }>();

  constructor(
    private http:HttpClient,
    private cookieService: CookieService,
  ) { }


  /**
   * Set country to local storage 
   * 
   * @param country 
   */
  public set currentCountry(country:string)  {
    if (country) {
      if (country !== "") {
        localStorage.setItem("country" , country)
      }
    }
  }

  /**
   * Get Country from local storage 
   * @returns (Country) @type string
   */
  public get currentCountry() : string {
     return !!localStorage.getItem("country") ? 
              localStorage.getItem("country") : "";
  }

  public set user(data:any) {
    if(data) {
      localStorage.setItem("user" , JSON.stringify(data));
    }
  }

  public get user() : any  {
    return !!localStorage.getItem("user") ?
             JSON.parse(localStorage.getItem("user")) : {};
  }

  /**
   * @method POST
   * @param data 
   */
  public auth(data:IUserLogin) : Observable<any> {
    return this.http
               .post("/api/auth" , data , {
                  responseType:"text",
               })
               .pipe(map(token => {
                this.cookieService.set('token', token, 14 , '/');   
                this.user = parseJWT(token)
                
                 return token;
               }))
  }


  public getCountries() : Observable<any> {
     return this.http
                .get('/assets/data/countries.json')
                .pipe(map(el => {
                  let data = [];
                  for (const key in el) {
                      if (key.length === 2) {
                        data.push({asc: key, name: el[key]});
                      }
                  }
                  return data
                }))
  };

  getIndustries(): Observable<any> {
      return this.http.get('/assets/data/industries.json').pipe(map(el => {
        let data = [];
        for (const key in el) {
              data.push({asc: key, name: el[key]});

        }
        return data
      }))
  }

  public get hasAuth() {
     return !!this.cookieService.get('token')
  }

  /**
   * Send email 
   * @method POST
   * @param data 
   */
  public sendEmail(data:ISendEmail): Observable<any> {
    return this.http
               .post('/api/email' , data)
  }

  /**
   * Get city by city name only 
   * @method GET 
   * @param city_name 
   */
  public getCityByName(city_name:string) : Observable<any> {
    return this.http
               .get(`/api/graphql/cities/${city_name}`)
               .pipe(map(el => el["getListOfAllCities"]))
  }

  /**
   * Get list of country codes ( for phone )
   */
  public getListOfCountryCodes() : Observable<any> {
    return this.http
               .get(`/api/graphql/country_codes`)
  }

  /**
   * Get city by coutry id 
   * 
   * @method GET 
   * @param country_id 
   * @param city_name 
   */
  public getCityByCountryAndName(country_id:string , city_name:string) : Observable<any> {
    return this.http
               .get(`/api/graphql/cities/${country_id}/${city_name}`)
               .pipe(map(el => el["getListOfCities"]))
  }


   /** SALES TOOLS  */
 
  getCompanies(after: number = 0, status = "any"): Observable<any> {
    return this.http.get(`/api/companies?first=12&after=${after}&status=${status}`);
  }


  getCompanyById( company_id: string ): Observable<any> {
    return this.http.get(`/api/companies/${company_id}`)
  }

  editCompany( company_id: string, input: ICompanyEdit ): Observable<any> {
    return this.http.put(`/api/companies/${company_id}`, input )
  }

  editCompanyContactInfo( company_id: string, data: any ): Observable<any> {
    return this.http.put(`/api/contact_person/${company_id}`, data)
  }

  changeCompanyStatus( company_id: string , status:string): Observable<any> {
    return this.http.put(`/api/companies/${company_id}/stage` , { status })
  }

  getCompanyComments( company_id: string ): Observable<any> {
    return this.http.get(`/api/companies/${company_id}/comments`)
  }

  addComment( company_id: string, comment: string  ): Observable<any> {
    return this.http.post(`/api/companies/${company_id}/comments `,{ text: comment })
  } 

  editComment( company_id: string, comment_id: string, text:string ): Observable<any> {
    return this.http.put(`/api/companies/${company_id}/comments/${comment_id}` , { text })
  }

  deleteComment( company_id: string, comment_id: string ): Observable<any> {
    return this.http.delete(`/api/companies/${company_id}/comments/${comment_id}`)
  }

  addCompanyHistory(company_id:string, text:string) : Observable<any> {
    return this.http.post(`/api/companies/${company_id}/history` , { text })
  }

  getCompanyHistroy( company_id: string ): Observable<any> {
    return this.http.get(`/api/companies/${company_id}/history`)
  }

}
