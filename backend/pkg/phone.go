package sales

// Phone ...
type Phone struct {
	CountryCode string `bson:"country_code"  json:"country_code"`
	Number      string `bson:"number" json:"number"`
}
