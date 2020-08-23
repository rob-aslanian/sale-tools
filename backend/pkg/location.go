package sales

// Location represnts generalo location
type Location struct {
	Country string `bson:"country" json:"country"`
	City    *City  `bson:"city" json:"city"`
}

// Country ...
type Country struct {
	ID   string `bson:"id" json:"id"`
	Name string `bson:"name,omitempty" json:"name,omitempty"`
}

// City ...
type City struct {
	ID          string `bson:"id,omitempty" json:"id,omitempty"`
	Name        string `bson:"city,omitempty" json:"city,omitempty"`
	Subdivision string `bson:"subdivision,omitempty" json:"subdivision,omitempty"`
}
