package sales

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User ...
type User struct {
	ID         primitive.ObjectID `bson:"_id" json:"id"`
	FirstName  string             `bson:"first_name" json:"first_name"`
	Lastname   string             `bson:"last_name" json:"last_name"`
	Birthday   string             `bson:"birthday" json:"birthday"`
	Email      string             `bson:"email" json:"email"`
	Username   string             `bson:"username" json:"username"`
	Password   string             `bson:"password" json:"password"`
	Country    string             `bson:"country" json:"country"`
	Language   string             `bson:"language" json:"language"`
	Gender     string             `bson:"gender" json:"gender"`
	Department string             `bson:"departament" json:"departament"`
	Phones     []Phone            `bson:"phones,omitempty" json:"phones"`
	InvitedBy  *string            `bson:"invited_by" json:"invited_by"`
}
