import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SalesService } from 'src/app/sales.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, filter, tap } from 'rxjs/operators';
import { PasswordValidation } from 'src/app/shared/register.validator';

@Component({
  selector: 'app-edit-compnay-detailed-modal',
  templateUrl: './edit-compnay-detailed-modal.component.html',
  styleUrls: ['./edit-compnay-detailed-modal.component.scss']
})
export class EditCompnayDetailedModalComponent implements OnInit {
  
 
  @Output() 
    result: EventEmitter<any> = new EventEmitter<any>();
  @Input()
    data: any;
    
  type: string;
  editForm: FormGroup;
  listOfCountries: any[] = [];
  listOfIndustries: any[] = [];
  countryCodes:Observable<any[]>;

  get editCtrls() {
       return this.editForm.controls;
  };

  constructor(
    private fb: FormBuilder,
    private salesService: SalesService
  ) { 
    this.editForm = fb.group({
        name: [''],
        emails: fb.array([
          fb.control("" , { validators:Validators.compose([ Validators.required, Validators.email ] )})
        ]),
        addresses: fb.group({
            apartament: ['', Validators.required],
            region: ['', Validators.required],
            postal_code: ['', Validators.required],
            location: fb.group({
                country:  [''],
                city:  ['']
             }) ,
           street:  [''],
        }),
        websites:fb.array([
          fb.control("")
        ]),
        vat: [''],
        foundation_date: [''],
        industry: ['', Validators.required],
        company_type: ['', Validators.required],
        phones: fb.array([
          fb.group({
              country_code:[''],
              number: ['', Validators.required]
          })
        ]),
        business_hours:[],
    })
   }

   
    
   ngOnInit() {    
    this.countryCodes = this.salesService.getListOfCountryCodes()

    this.salesService.getCountries()
        .subscribe((contries:any[]) => this.listOfCountries = contries);

    this.salesService.getIndustries()
        .subscribe((industries:any[]) => this.listOfIndustries = industries );

    
    this.patchData();
   };


   patchData() {
    if (this.data) {
      this.editForm.patchValue({
          name: this.data.name,
          emails: this.data.emails,
          addresses:  this.data.addresses,
          websites:this.data.websites,
          vat:this.data.vat,
          foundation_date:this.data.foundation_date,
          industry:this.data.industry,
          company_type:this.data.company_type,
          phones:this.data.phones,
          business_hours:this.data.business_hours,
      });
    }
  
   }

  close() { this.result.emit({ _case: 'close' }) }

  addPhone() {
     const phones = this.editForm.get('phones') as FormArray;
     phones.push(this.fb.group({ phone: ['', Validators.required ] }));     
  }

  getListOfCities( e: any ) { };

  searchCity = (text$: Observable<string>) =>    
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((term ) =>  term.length > 1? this.getCities(term):[])
  )
  cityFormatter = ( city ) => city.city;
  
  getCities(term?:string){  
    return this.salesService
               .getCityByName(term)
               .pipe(
                 filter(cities => {
                   return cities.filter(c => c.city.toLowerCase()
                                .indexOf(term.toLowerCase()) > -1).slice(0, 10)
                 })
                )
  }

   getWorkingHour(hours:any){
    if(hours) { 
       this.editForm
           .get('business_hours')
           .setValue(hours[0])
    }
   }

   submit() {

        this.salesService
            .editCompany(this.data._id, this.editForm.value)
            .subscribe( () => {
               let user = this.salesService.user;
               this.salesService
                    .addCompanyHistory(this.data._id , `${user.username} <b>Company information updated</b>`)
                    .subscribe(() => this.close())
            } )
   }
}
