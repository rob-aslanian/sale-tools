package salesrepo

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

// Repository ...
type Repository struct {
	db                  *mongo.Database
	CompaniesCollection *mongo.Collection
	JobsCollection      *mongo.Collection
	UsersCollection     *mongo.Collection
	CommentsCollection  *mongo.Collection
	HistoriesCollection *mongo.Collection
	Repos               SalesToolsRepository
}

// Settings ...
type Settings struct {
	DBAddresses             []string
	User                    string
	Password                string
	DBName                  string
	CompaniesCollectionName string
	JobsCollectionName      string
	UsersCollectionName     string
	CommentsCollectionName  string
	HistoriesCollectionName string
}

// NewRepository ...
func NewRepository(settings *Settings) (*Repository, error) {
	repo := connect(settings)

	repo.CompaniesCollection = repo.db.Collection(settings.CompaniesCollectionName)
	repo.JobsCollection = repo.db.Collection(settings.JobsCollectionName)
	repo.UsersCollection = repo.db.Collection(settings.UsersCollectionName)
	repo.CommentsCollection = repo.db.Collection(settings.CommentsCollectionName)
	repo.HistoriesCollection = repo.db.Collection(settings.HistoriesCollectionName)

	return repo, nil
}

func connect(settings *Settings) *Repository {
	repo := Repository{}

	opts := options.Client()
	opts.SetHosts(settings.DBAddresses)
	if settings.User != "" || settings.Password != "" {
		opts.SetAuth(options.Credential{
			Username: settings.User,
			Password: settings.Password,
		})
	}
	err := opts.Validate()
	if err != nil {
		panic(err)
	}

	client, err := mongo.NewClient(opts)
	if err != nil {
		panic(err)
	}

	// connection
	ctx, cancel := context.WithTimeout(context.Background(), 20*time.Second)
	defer cancel()

	err = client.Connect(ctx)
	if err != nil {
		panic(err)
	}
	ctx.Done()

	// ping
	ctx, cancel = context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = client.Ping(ctx, readpref.Primary())
	if err != nil {
		panic(err)
	}
	ctx.Done()

	repo.db = client.Database(settings.DBName)

	return &repo
}

// Close ...
func (r *Repository) Close() {
	ctx := context.Background()
	err := r.db.Client().Disconnect(ctx)
	if err != nil {
		panic(err)
	}
}
