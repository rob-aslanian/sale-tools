import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportedJobsRoutingModule } from './imported-jobs-routing.module';
import { ImportedJobsComponent } from './imported-jobs.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { SelectJobTypeComponent } from './select-job-type/select-job-type.component';
import { JobsContainerComponent } from './jobs-container/jobs-container.component';
import { SharedModule } from '../shared/shared.module';
import { NewLeadComponent } from './jobs-container/new-lead/new-lead.component';
import { PreSalesComponent } from './jobs-container/pre-sales/pre-sales.component';
import { SalesComponent } from './jobs-container/sales/sales.component';
import { CompanyDetailedModalComponent } from './jobs-container/company-detailed-modal/company-detailed-modal.component';
import { SendEmailModalComponent } from './jobs-container/send-email-modal/send-email-modal.component';
import { EditCompnayDetailedModalComponent } from './jobs-container/company-detailed-modal/edit-compnay-detailed-modal/edit-compnay-detailed-modal.component';
import { ContactPersonModalComponent } from './jobs-container/company-detailed-modal/contact-person-modal/contact-person-modal.component';
import { NotificationComponent } from './jobs-container/notification/notification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ 
    CompanyDetailedModalComponent,
    ImportedJobsComponent, 
    SelectCountryComponent, 
    SelectJobTypeComponent, 
    JobsContainerComponent, 
    NewLeadComponent, 
    PreSalesComponent, 
    SalesComponent,
    SendEmailModalComponent,
    EditCompnayDetailedModalComponent,
    ContactPersonModalComponent,
    NotificationComponent
  ],
  entryComponents: [ NotificationComponent ],
  imports: [
      CommonModule,
      ImportedJobsRoutingModule,
      SharedModule,
      ReactiveFormsModule,
      NgbTypeaheadModule,
      NgbPaginationModule
    ]
})
export class ImportedJobsModule { }
