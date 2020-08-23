import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportedJobsComponent } from './imported-jobs.component';
import { SelectCountryComponent } from './select-country/select-country.component';
import { SelectJobTypeComponent } from './select-job-type/select-job-type.component';
import { JobsContainerComponent } from './jobs-container/jobs-container.component';
import { NewLeadComponent } from './jobs-container/new-lead/new-lead.component';
import { PreSalesComponent } from './jobs-container/pre-sales/pre-sales.component';
import { SalesComponent } from './jobs-container/sales/sales.component';
import { AuthGuard } from '../shared/guards/auth.guard';


const routes: Routes = [ 
  { path: 'imported-jobs', component: ImportedJobsComponent,
    canActivate: [AuthGuard],
      children: [
        { path: '', redirectTo: 'select-country', pathMatch: 'full' },
        { path: 'select-country', component: SelectCountryComponent },
        { path: 'select-job', component: SelectJobTypeComponent },   
        { path: 'jobs', component: JobsContainerComponent, 
          children:[
                 { path: 'new-lead', component: NewLeadComponent },
                 { path: '', pathMatch: 'full', redirectTo: 'new-lead' },
                 { path: 'pre-sales', component: PreSalesComponent },
                 { path: 'sales', component: SalesComponent }
          ] }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportedJobsRoutingModule { }
