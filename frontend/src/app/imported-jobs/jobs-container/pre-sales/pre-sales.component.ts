import { Component, OnInit, ViewChild } from '@angular/core';
import { AppModalComponent } from 'src/app/shared/components/app-modal/app-modal.component';
import { SalesService } from 'src/app/sales.service';

@Component({
  selector: 'app-pre-sales',
  templateUrl: './pre-sales.component.html',
  styleUrls: ['./pre-sales.component.scss', '../new-lead/new-lead.component.scss']
})
export class PreSalesComponent implements OnInit {

  @ViewChild(AppModalComponent, { static: false }) _modal: AppModalComponent;
  modalType: string ;
  companies: any= null;
  amount: number = 0 ;
  loading: boolean = true;
  page: number = 0;
  companyId: string ;
  
  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.salesService.getCompanies(0, "pre_sale")
        .subscribe(data =>  { this.companies = data; this.loading = false });
  }

  open( compId ) {
     this._modal.open();
     this._modal.title = ' ';
     this.modalType = 'detailed';
     this.companyId = compId; 
  };

  changePage(pagination: number) {
      console.log('here');
      const after: number =   --pagination * 15;
      this.loading = true;
      this.salesService.getCompanies(after)
          .subscribe(data => { this.companies = data; this.loading = false } );
   };
 
}
