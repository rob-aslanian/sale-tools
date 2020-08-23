package salesrepo

import (
	"context"
	"log"

	sales "gitlab.lan/Rightnao-site/sale-tools/pkg"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// GetCompanies ...
func (r *Repository) GetCompanies(ctx context.Context, data sales.Pagination, status sales.SaleStatus) (*sales.Companies, error) {

	match := bson.M{}

	// 	@TOCHANE
	if status == sales.SaleStatusAny {
		match["$or"] = []bson.M{
			bson.M{
				"status": bson.M{
					"$exists": false,
				},
			},
			bson.M{
				"status": sales.SaleStatusAny,
			},
		}
	} else {
		match["status"] = status
	}

	log.Println(match)

	cursor, err := r.CompaniesCollection.Aggregate(
		ctx,
		[]bson.M{
			{
				"$match": match,
			},

			{
				"$lookup": bson.M{
					"from":         "jobs",
					"localField":   "_id",
					"foreignField": "company_id",
					"as":           "jobs",
				},
			},
			{
				"$lookup": bson.M{
					"from":         "user",
					"localField":   "_id",
					"foreignField": "company_id",
					"as":           "owner",
				},
			},
			{
				"$unwind": bson.M{
					"path":                       "$owner",
					"preserveNullAndEmptyArrays": true,
				},
			},
			{
				"$addFields": bson.M{
					"jobs_amount": bson.M{
						"$size": bson.M{
							"$ifNull": []interface{}{
								"$jobs",
								"[]",
							},
						},
					},
					"source": bson.M{
						"$cond": bson.M{
							"if": bson.M{"$isArray": "$jobs"},
							"then": bson.M{
								"$arrayElemAt": []interface{}{
									"$jobs.source",
									0,
								},
							},
							"else": nil,
						},
					},
				},
			},
			{
				"$group": bson.M{
					"_id":             "$_id",
					"owner_id":        bson.M{"$first": "$owner_id"},
					"name":            bson.M{"$first": "$name"},
					"url":             bson.M{"$first": "$url"},
					"industry":        bson.M{"$first": "$industry"},
					"type":            bson.M{"$first": "$type"},
					"size":            bson.M{"$first": "$size"},
					"parking":         bson.M{"$first": "$parking"},
					"business_hours":  bson.M{"$first": "$business_hours"},
					"addresses":       bson.M{"$first": "$addresses"},
					"foundation_date": bson.M{"$first": "$foundation_date"},
					"created_at":      bson.M{"$first": "$created_at"},
					"websites":        bson.M{"$first": "$websites"},
					"vat":             bson.M{"$first": "$vat"},
					"invited_by":      bson.M{"$first": "$invited_by"},
					"company_type":    bson.M{"$first": "$company_type"},
					"career_center":   bson.M{"$first": "$career_center"},
					"contact_persons": bson.M{"$first": "$contact_persons"},
					"jobs":            bson.M{"$first": "$jobs"},
					"jobs_amount":     bson.M{"$first": "$jobs_amount"},
					"source":          bson.M{"$first": "$source"},
					"status": bson.M{
						"$first": bson.M{
							"$cond": bson.M{
								"if": bson.M{
									"$ifNull": []interface{}{
										"$status",
										"any",
									},
								},
								"then": "any",
								"else": "$status",
							},
						},
					},
					"emails": bson.M{
						"$addToSet": "$owner.email",
					},
					"phones": bson.M{"$first": "$phones"},
					// "phones": bson.M{
					// 	"$addToSet": "$owner.email",
					// },
				},
			},
			{
				"$sort": bson.M{
					"jobs_amount": -1,
				},
			},
			{
				"$group": bson.M{
					"_id": nil,
					"companies": bson.M{
						"$push": "$$CURRENT",
					},
				},
			},

			{
				"$addFields": bson.M{
					"amount": bson.M{
						"$cond": []interface{}{
							bson.M{"$isArray": "$companies"},
							bson.M{"$size": "$companies"},
							0,
						},
					},
				},
			},
			{
				"$project": bson.M{
					"companies": bson.M{
						"$slice": []interface{}{
							"$companies",
							data.After,
							data.First,
						},
					},
					"amount": 1,
				},
			},
		},
	)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	res := new(sales.Companies)

	if cursor.Next(ctx) {
		err := cursor.Decode(&res)
		log.Print(err)
		if err != nil {
			return nil, err
		}

	}

	return res, nil

}

// GetCompanyInfo ...
func (r *Repository) GetCompanyInfo(ctx context.Context, companyID string) (*sales.Company, error) {
	objComapnyID, err := primitive.ObjectIDFromHex(companyID)

	if err != nil {
		return nil, err
	}

	result := r.CompaniesCollection.FindOne(ctx,
		bson.M{
			"_id": objComapnyID,
		},
	)

	company := sales.Company{}

	err = result.Decode(&company)
	if err != nil {
		return nil, err
	}

	return &company, nil
}

// GetCompanyJobs ...
func (r *Repository) GetCompanyJobs(ctx context.Context, companyID string) ([]*sales.Job, error) {
	objComapnyID, err := primitive.ObjectIDFromHex(companyID)

	if err != nil {
		return nil, err
	}

	cursor, err := r.JobsCollection.Aggregate(ctx,
		[]bson.M{
			{
				"$match": bson.M{
					"company_id": objComapnyID,
				},
			},
			{
				"$group": bson.M{
					"_id": "$company_id",
					"jobs": bson.M{
						"$push": "$job_details",
					},
				},
			},
			{
				"$project": bson.M{
					"_id":  0,
					"jobs": 1,
				},
			},
		},
	)

	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)

	var res = struct {
		Jobs []*sales.Job `bson:"jobs,omitempty"`
	}{}

	if cursor.Next(ctx) {
		err := cursor.Decode(&res)
		if err != nil {
			return nil, err
		}
	}

	return res.Jobs, nil
}

// ChangeCompanyInfo ...
func (r *Repository) ChangeCompanyInfo(ctx context.Context, companyID string, data sales.Company) error {

	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}

	_, err = r.CompaniesCollection.UpdateOne(
		ctx,
		bson.M{
			"_id": objComapnyID,
		},
		bson.M{
			"$set": data, // @TODO --> Need to add fields ,
			// ---
			// ---
		},
	)
	if err != nil {
		return err
	}

	return nil
}

// ChangeCompanyStage ...
func (r *Repository) ChangeCompanyStage(ctx context.Context, companyID string, data sales.SaleStatus) error {

	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}

	_, err = r.CompaniesCollection.UpdateOne(
		ctx,
		bson.M{
			"_id": objComapnyID,
		},
		bson.M{
			"$set": bson.M{
				"status": data,
			},
		},
	)
	if err != nil {
		return err
	}

	return nil
}

// RemoveCompanyComment ...
func (r *Repository) RemoveCompanyComment(ctx context.Context, companyID, commentID string) error {

	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}

	objCommentID, err := primitive.ObjectIDFromHex(commentID)
	if err != nil {
		return err
	}

	_, err = r.CommentsCollection.UpdateOne(
		ctx,
		bson.M{
			"_id": objComapnyID,
		},
		bson.M{
			"$pull": bson.M{
				"comments": bson.M{
					"_id": objCommentID,
				},
			},
		},
	)
	if err != nil {
		return err
	}

	return nil
}

// EditCompanyComment ...
func (r *Repository) EditCompanyComment(ctx context.Context, companyID, commentID, text string) error {

	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}

	objCommentID, err := primitive.ObjectIDFromHex(commentID)
	if err != nil {
		return err
	}

	_, err = r.CommentsCollection.UpdateOne(
		ctx,
		bson.M{
			"_id":          objComapnyID,
			"comments._id": objCommentID,
		},
		bson.M{
			"$set": bson.M{
				"comments.$.text": text,
			},
		},
	)
	if err != nil {
		return err
	}

	return nil
}

// GetCompanyComments ....
func (r *Repository) GetCompanyComments(ctx context.Context, companyID string, data sales.Pagination) (*sales.Comments, error) {
	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return nil, err
	}

	cursor, err := r.CommentsCollection.Aggregate(
		ctx,
		[]bson.M{
			{
				"$match": bson.M{
					"_id": objComapnyID,
				},
			},
			{
				"$addFields": bson.M{
					"amount": bson.M{
						"$cond": []interface{}{
							bson.M{"$isArray": "$comments"},
							bson.M{"$size": "$comments"},
							0,
						},
					},
				},
			},
			{
				"$project": bson.M{
					"comments": bson.M{
						"$slice": []interface{}{
							"$comments",
							data.After,
							data.First,
						},
					},
					"amount": 1,
				},
			},
		},
	)

	res := &sales.Comments{}

	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)

	if cursor.Next(ctx) {
		err := cursor.Decode(&res)
		if err != nil {
			return nil, err
		}
	}

	return res, nil
}

// GetCompanyHistories ....
func (r *Repository) GetCompanyHistories(ctx context.Context, companyID string, data sales.Pagination) (*sales.Histories, error) {
	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return nil, err
	}

	cursor, err := r.HistoriesCollection.Aggregate(
		ctx,
		[]bson.M{
			{
				"$match": bson.M{
					"target_id": objComapnyID,
				},
			},
			{
				"$addFields": bson.M{
					"amount": bson.M{
						"$cond": []interface{}{
							bson.M{"$isArray": "$histories"},
							bson.M{"$size": "$histories"},
							0,
						},
					},
				},
			},
			{
				"$project": bson.M{
					"histories": bson.M{
						"$slice": []interface{}{
							"$histories",
							data.After,
							data.First,
						},
					},
					"amount": 1,
				},
			},
		},
	)

	res := &sales.Histories{}

	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)

	if cursor.Next(ctx) {
		err := cursor.Decode(&res)
		if err != nil {
			return nil, err
		}
	}

	return res, nil
}

// AddCompanyHistory ...
func (r *Repository) AddCompanyHistory(ctx context.Context, companyID string, data sales.History) error {
	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}
	_, err = r.HistoriesCollection.UpdateOne(
		ctx,
		bson.M{
			"target_id": objComapnyID,
		},
		bson.M{
			"$addToSet": bson.M{
				"histories": data,
			},
		},
		options.Update().SetUpsert(true),
	)
	if err != nil {
		return err
	}

	return nil
}

// AddCompanyComments ...
func (r *Repository) AddCompanyComments(ctx context.Context, companyID string, data sales.Comment) error {

	objComapnyID, err := primitive.ObjectIDFromHex(companyID)
	if err != nil {
		return err
	}

	log.Println(r.CommentsCollection.Name())

	_, err = r.CommentsCollection.UpdateOne(
		ctx,
		bson.M{
			"_id": objComapnyID,
		},
		bson.M{
			"$addToSet": bson.M{
				"comments": data,
			},
		},
		options.Update().SetUpsert(true),
	)
	if err != nil {
		return err
	}

	return nil
}
