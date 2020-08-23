package salesrepo

import (
	"context"

	sales "gitlab.lan/Rightnao-site/sale-tools/pkg"
)

// SalesToolsRepository ...
type SalesToolsRepository interface {
	GetCompanies(ctx context.Context, data sales.Pagination, status sales.SaleStatus) (*sales.Companies, error)
	GetCompanyInfo(ctx context.Context, companyID string) (*sales.Company, error)
	ChangeCompanyInfo(ctx context.Context, companyID string, data sales.Company) error
	ChangeCompanyStage(ctx context.Context, companyID string, data sales.JobStatus) error
	AddCompanyComments(ctx context.Context, companyID string, data sales.Comment) error
	EditCompanyComment(ctx context.Context, companyID, commentID, text string) error
	RemoveCompanyComment(ctx context.Context, companyID, commentID string) error
	GetCompanyComments(ctx context.Context, companyID string, data sales.Pagination) (*sales.Comments, error)
	GetCompanyJobs(ctx context.Context, companyID string) ([]*sales.Job, error)
	GetCompanyHistories(ctx context.Context, companyID string, data sales.Pagination) (*sales.Histories, error)
	AddCompanyHistory(ctx context.Context, companyID string, data sales.History) error
}
