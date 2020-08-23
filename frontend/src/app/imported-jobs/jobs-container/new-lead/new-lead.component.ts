import { Component, OnInit, ViewChild } from '@angular/core';
import { AppModalComponent } from 'src/app/shared/components/app-modal/app-modal.component';
import { SalesService } from 'src/app/sales.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html', 
  styleUrls: ['./new-lead.component.scss']
})
export class NewLeadComponent implements OnInit {
  
  @ViewChild( AppModalComponent, { static: false } ) _modal: AppModalComponent;
  
  modalType: string;
  companies: any = null;
  amount: number = 0 ;
 
  loading: boolean = true;
  page: number = 0;
  selectedCompanyID: string;
  recivers:string[] = [];

  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() { 

     this.salesService.getCompanies()
         .subscribe(data => { this.companies = data; this.loading = false; console.log(this.companies) } );
      
   }

  openModal(type: string, company: object) {

    this.modalType = type;
    this.selectedCompanyID = company["_id"];

    switch (type) {
      case "detailed":
          this._modal.title = " ";
          this._modal.size = "xl";
          break;
      default:
        this._modal.title = type;
        if ( company["emails"] ) {
          this.recivers  = company["emails"].filter(email => email != "");
        }
      
        break;
    }
  
    this._modal.open();
  

  };
  

  closeModal() {
    this._modal.close(); 
    this.modalType = null;

    this.salesService
        .changeCompanyStatus(this.selectedCompanyID , "pre_sale")
        .subscribe(() => {
          this.salesService.$notification.next({
              messsage: 'The company is moved to, <a style="color:#00D4E3">Pre-Sales</a> Please, follow the process there.',
              link: '/imported-jobs/jobs/pre-sales'
          });

        })

  }
 
  changePage(pagination: number) {
       const after: number =   --pagination * 15;
       this.loading = true;
       this.salesService.getCompanies(after)
           .subscribe(data => { this.companies = data; this.loading = false; } );
  };

}
