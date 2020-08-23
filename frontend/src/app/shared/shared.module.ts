import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModalComponent } from './components/app-modal/app-modal.component';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BusinesHoursComponent } from './components/busines-hours/busines-hours.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DelimetrPipe } from './pipes/delimetr.pipe';

const COMPONENTS: any[] = [
  HeaderComponent,
  AppModalComponent,
  BusinesHoursComponent,
  SpinnerComponent,
  DelimetrPipe
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTimepickerModule,
    NgMultiSelectDropDownModule,
    RouterModule
  ],
  exports: [
    ...COMPONENTS,
    RouterModule,
    FormsModule    
  ]
})
export class SharedModule { }
 