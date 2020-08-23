package sales

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Histories ...
type Histories struct {
	ID        primitive.ObjectID `bson:"target_id" json:"target_id"`
	Histories []History          `bson:"histories" json:"histories"`
	Amount    int32              `bson:"amount" json:"amount"`
}

// GetID returns id
func (p Histories) GetID() string {
	return p.ID.Hex()
}

// SetID set id
func (p *Histories) SetID(id string) error {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	p.ID = objID
	return nil
}

// History ...
type History struct {
	ID        primitive.ObjectID `bson:"_id" json:"_id"`
	OwnerID   primitive.ObjectID `bson:"owner_id" json:"owner_id"`
	Text      string             `bson:"text" json:"text"`
	CreatedAt time.Time          `bson:"created_at" json:"created_at"`
}

// GenerateID creates new id
func (p *History) GenerateID() string {
	p.ID = primitive.NewObjectID()
	return p.ID.Hex()
}

// GetOwnerID returns owner id
func (p History) GetOwnerID() string {
	return p.OwnerID.Hex()
}

// SetOwnerID set owner id
func (p *History) SetOwnerID(id string) error {
	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	p.OwnerID = objID
	return nil
}
