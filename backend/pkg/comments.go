package sales

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Comments ...
type Comments struct {
	ID       primitive.ObjectID `bson:"_id" json:"_id"`
	Comments []Comment          `bson:"comments" json:"comments"`
	Amount   int32              `bson:"amount" json:"amount"`
}

// GetID returns id
func (p Comments) GetID() string {
	return p.ID.Hex()
}

// SetID set id
func (p *Comments) SetID(id string) error {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	p.ID = objID
	return nil
}

// Comment ...
type Comment struct {
	ID        primitive.ObjectID `bson:"_id" json:"_id"`
	OwnerID   primitive.ObjectID `bson:"owner_id" json:"owner_id"`
	Text      string             `bson:"text" json:"text"`
	CreatedAt time.Time          `bson:"created_at" json:"created_at"`
}

// SetID creates new id
func (p *Comment) SetID() string {
	p.ID = primitive.NewObjectID()
	return p.ID.Hex()
}

// GenerateID creates new id
func (p *Comment) GenerateID() string {
	p.ID = primitive.NewObjectID()
	return p.ID.Hex()
}

// GetOwnerID returns owner id
func (p Comment) GetOwnerID() string {
	return p.OwnerID.Hex()
}

// SetOwnerID set owner id
func (p *Comment) SetOwnerID(id string) error {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	p.OwnerID = objID
	return nil
}
