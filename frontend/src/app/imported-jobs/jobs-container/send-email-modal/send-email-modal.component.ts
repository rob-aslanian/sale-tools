import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from 'src/app/sales.service';

@Component({
  selector: 'app-send-email-modal',
  templateUrl: './send-email-modal.component.html',
  styleUrls: ['./send-email-modal.component.scss']
})
export class SendEmailModalComponent implements OnInit {

  submitted: boolean = false;

  @Input() recivers: string[] = [];
  @Input() companyID:string;
  @Output() result: EventEmitter<any> = new EventEmitter<any>();

  emailFormGroup:FormGroup;
  emails: string[] = [];
  
  constructor(
    private salesService: SalesService,
    private f:FormBuilder
  ) {
    this.emailFormGroup = f.group({
      subject:['RightNao'],
      text:["Default Text , Michael will provide it" , Validators.required],
      
    } )
   }

  ngOnInit() { 
    this.emails = [...this.recivers];

  };

  sendEmail() {
     
     this.submitted = true;
     if( this.emailFormGroup.invalid ) return;

      this.salesService
          .sendEmail( {
            ...this.emailFormGroup.value,
            recieviers:this.emails,
          } )
          .subscribe( 
          () => {
            this.result.emit();
            this.salesService
                .changeCompanyStatus(this.companyID , "pre_sale")
                .subscribe()
          },  
          (err) => this.result.emit());
  };

  addEmail(input:HTMLInputElement , e:Event){
    e.preventDefault();
  
    let value = input.value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/gmi;

    if (value !== "" && emailRegex.test(value)) {
      this.emails.push(value);
      input.classList.remove('is-invalid');
      input.value = "";
    } else {
      input.classList.add("is-invalid");
    }

    return false;
    
  }

  remove = (i:number) => this.emails.splice(i,1)
  
}
