package sales

import (
	"encoding/json"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Company ...
type Company struct {
	ID             primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	OwnerID        primitive.ObjectID `bson:"owner_id,omitempty" json:"owner_id,omitempty"`
	Status         *string            `bson:"status,omitempty" json:"status,omitempty"`
	Name           interface{}        `bson:"name" json:"name"`
	URL            interface{}        `bson:"url,omitempty" json:"url,omitempty"`
	Industry       interface{}        `bson:"industry" json:"industry"`
	Type           interface{}        `bson:"type" json:"type"`
	Size           interface{}        `bson:"size,omitempty" json:"size,omitempty"`
	Parking        interface{}        `bson:"parking,omitempty" json:"parking,omitempty"`
	BusinessHours  BusinessHour       `bson:"business_hours,omitempty" json:"business_hours,omitempty"`
	Addresses      Address            `bson:"addresses,omitempty" json:"addresses"`
	FoundationDate interface{}        `bson:"foundation_date,omitempty" json:"foundation_date,omitempty"`
	Emails         []string           `bson:"emails" json:"emails"`
	Phones         []Phone            `bson:"phones" json:"phones"`
	CreatedAt      interface{}        `bson:"created_at,omitempty" json:"created_at,omitempty"`
	Website        []string           `bson:"websites" json:"websites"`
	VAT            string             `bson:"vat,omitempty" json:"vat,omitempty"`
	Source         string             `bson:"source,omitempty" json:"source,omitempty"`
	InvitedBy      interface{}        `bson:"invited_by,omitempty" json:"invited_by,omitempty"`
	CompanyType    interface{}        `bson:"company_type,omitempty" json:"company_type,omitempty"`
	CareerCenter   interface{}        `bson:"career_center" json:"-"`
	ContactPerson  []User             `bson:"contact_persons,omitempty" json:"contact_persons,omitempty"`

	Email string       `bson:"-"`
	Phone string       `bson:"-"`
	Jobs  []CompanyJob `bson:"jobs,omitempty" json:"jobs"`
}

func (c *Company) MarshalJSON() ([]byte, error) {
	type Alias Company
	return json.Marshal(&struct {
		ID      string `json:"_id"`
		OwnerID string `json:"owner_id"`
		*Alias
	}{
		Alias:   (*Alias)(c),
		ID:      c.ID.Hex(),
		OwnerID: c.OwnerID.Hex(),
	})
}

func (c *Company) UnmarshalJSON(data []byte) error {
	type Alias Company
	aux := &struct {
		ID      string `json:"_id"`
		OwnerID string `json:"owner_id"`
		*Alias
	}{
		Alias: (*Alias)(c),
	}
	if err := json.Unmarshal(data, &aux); err != nil {
		return err
	}
	id, _ := primitive.ObjectIDFromHex(aux.ID)
	ownerID, _ := primitive.ObjectIDFromHex(aux.ID)
	c.ID = id
	c.OwnerID = ownerID

	return nil
}

// Companies ...
type Companies struct {
	Companies []Company `bson:"companies" json:"companies"`
	Amount    int32     `bson:"amount" json:"amount"`
}

// Industry ...
type Industry struct {
	Main string   `bson:"main" json:"main"`
	Sub  []string `bson:"sub"  json:"sub"`
}

// IndustryJSON ...
type IndustryJSON struct {
	Main string   `json:"main"`
	Sub  []string `json:"sub"`
}

// BusinessHour ...
type BusinessHour struct {
	Weekdays []string `bson:"week_days" json:"week_days"`
	HourFrom string   `bson:"hour_from" json:"hour_from"`
	HourTo   string   `bson:"hour_to" json:"hour_to"`
}

// Address ...
type Address struct {
	Location   Location `bson:"location" json:"location"`
	PostalCode string   `bson:"postal_code" json:"postal_code"`
	Apartment  string   `bson:"apartament" json:"apartament"`
	Region     string   `bson:"region" json:"region"`
}

// GeoPos ...
type GeoPos struct {
	Lantitude float64 `bson:"lantitude" json:"lantitude"`
	Longitude float64 `bson:"longitude" json:"longitude"`
}
