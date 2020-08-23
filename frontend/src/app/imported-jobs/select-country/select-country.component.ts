import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './model';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent implements OnInit {

  COUNTRIES = COUNTRIES;
  clicked: boolean = false;
  previusNode: any = null;

  constructor() { }

  ngOnInit() {  };


  expand( e: any   ) {
    
    if( !e.target.children.length ) return;
    
    if( e.target.children[0].classList.contains('d-none') ) {
         e.target.children[0].classList.remove('d-none');
    };
   
    if( this.previusNode && !this.previusNode.isSameNode(e.target.children[0]) ) {
         this.previusNode.classList.add('d-none');
    }
    
    this.previusNode = e.target.children[0];
       
  };

}
