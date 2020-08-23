import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesService } from 'src/app/sales.service';
import { PasswordValidation } from 'src/app/shared/register.validator';
import { YEARS, MONTHS, DAYS } from 'src/app/utiles';
import { format } from 'url';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-person-modal',
  templateUrl: './contact-person-modal.component.html',
  styleUrls: ['./contact-person-modal.component.scss']
})
export class ContactPersonModalComponent implements OnInit {

  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  @Input()  data: any;
  contactForm: FormGroup;
  listOfCountries: any[] = [];
  submitted: boolean = false;
  countryCodes:Observable<any[]>

  YEARS = YEARS
  MONTHS = MONTHS
  DAYS = DAYS

  get ctCtrls() {
      return this.contactForm.controls;
  }

  
  constructor(
    private fb: FormBuilder,
    private salesService: SalesService 
  ) { 
     this.contactForm = fb.group({
         first_name: ['', Validators.required],
         last_name: ['', Validators.required ],
         departament: ['', Validators.required],
         username: ['', Validators.required],
         email: ['', Validators.email],
         country: [this.salesService.currentCountry, Validators.required],
         gender: ['male'],
         year:[""],
         month:[""],
         day:[""],
         password: ['',  Validators.compose([
              Validators.required, 
              PasswordValidation.detectUppercase(), 
              PasswordValidation.detectNumber(), 
              PasswordValidation.detectLength(7), 
          ])],
        phone:fb.group({
          country_code:[""],
          number:[""],
        })
     })
  }
 
  ngOnInit() {
   this.countryCodes = this.salesService.getListOfCountryCodes()
   this.salesService.getCountries()
       .subscribe((contries:any[]) => this.listOfCountries = contries);
  }

  close() {this.result.emit({_case: 'CLOSE'})}

  save() {
      this.submitted = true;
      
      
      if( this.contactForm.invalid ) return;
      
      let {  day , month , year } = this.contactForm.value;
      let birthday;

      if ( day !== "" && month !== "" && year !== "") {
        birthday = `${day}-${month}-${year}`
      }

      this.salesService
          .editCompanyContactInfo(this.data._id, {
            ...this.contactForm.value,
            birthday
          })
          .subscribe(
            () => this.close(),
            (err) => console.log(err),
            () => this.close()
            
           )
  };
}
