export interface IUserLogin {
    username?:string;
    password?:string;
}

export interface ISendEmail {
    recieviers?:string[];
    subject?:string;
    text?:string;
}

export interface ICompanyEdit {
	Name : string,
	Industry: any[]
	Type: string
    Size: string
    Parking: String
	BusinessHours: any[]
	Addresses: any[]
	FoundationDate: any
	Emails: string[]
	Phones: any[]
	CreatedAt: any
	Website: string[]
	VAT: string
	CompanyType: string
};