package sales

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CompanyJob struct {
	ID        primitive.ObjectID `bson:"_id,omitempty" json:"_id,omitempty"`
	OwnerID   primitive.ObjectID `bson:"user_id,omitempty" json:"user_id,omitempty"`
	CompanyID primitive.ObjectID `bson:"company_id,omitempty" json:"company_id,omitempty"`
	Job       Job                `bson:"job_details,omitempty" json:"job_details,omitempty"`
	CreatedAt time.Time          `bson:"created_at,omitempty" json:"created_at,omitempty"`
}

// Job ...
type Job struct {
	Title                 interface{}      `bson:"title"  json:"title"`
	CountryID             string           `bson:"country_id"  json:"country_id"`
	City                  []City           `bson:"city,omitempty"  json:"city,omitempty"`
	EmploymentType        interface{}      `bson:"employment_type"  json:"employment_type"`
	Description           []JobDescription `bson:"description,omitempty"  json:"description,omitempty"`
	Required              interface{}      `bson:"required"  json:"required"`
	SalaryCurrency        string           `bson:"salarycurrency"  json:"salarycurrency"`
	SalaryMin             int              `bson:"salarymin"  json:"salarymin"`
	SalaryMax             int              `bson:"salarymax"  json:"salarymax"`
	SalaryInterval        interface{}      `bson:"salaryinterval"  json:"salaryinterval"`
	AddtionalCompensation interface{}      `bson:"additional_compensation"  json:"additional_compensation"`
	AdditionalInfo        interface{}      `bson:"additional_info"  json:"additional_info"`
	NumberofPositions     interface{}      `bson:"numberofpositions"  json:"numberofpositions"`
	DeadlineDay           interface{}      `bson:"deadlineday"  json:"deadlineday"`
	DeadlineMonth         interface{}      `bson:"deadlinemonth"  json:"deadlinemonth"`
	DeadlineYear          interface{}      `bson:"deadlineyear"  json:"deadlineyear"`
}

// JobDescription ...
type JobDescription struct {
	Language    string `bson:"language,omitempty" json:"language,omitempty"`
	Description string `bson:"description,omitempty" json:"description,omitempty"`
	WhyUs       string `bson:"why_us,omitempty" json:"why_us,omitempty"`
}
