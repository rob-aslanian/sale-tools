import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {   Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean = false;

  constructor(
    private salesService:SalesService,
    private f:FormBuilder,
    private router: Router
  ) { 
    this.loginForm = f.group({
      username:["" , Validators.required],
      password:["" , Validators.required],
    })
  }

  ngOnInit() {
  }

  get form() {
    return this.loginForm.controls
  }

  login(e:Event) {
    e.preventDefault();

    this.submitted = true;
  
    if(this.loginForm.valid) {
      this.salesService
        .auth(this.loginForm.value)
        .subscribe(el => {
              this.router.navigate(['/imported-jobs', 'select-country'])
        }, 
        (err) => {
          console.log(err);
        }
      )
    }
    
  }

}
