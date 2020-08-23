import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  SELECT_JOB } from '../select-country/model';
import { NotificationComponent } from './notification/notification.component';
import { SalesService } from 'src/app/sales.service';

@Component({
  selector: 'app-jobs-container',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.scss']
})
export class JobsContainerComponent implements OnInit  {

  params: any = null;
  SELECT_JOB = SELECT_JOB;
  job: any = null;

  @ViewChild( 'placeholder', {read: ViewContainerRef, static: false} ) _cp: ViewContainerRef
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver,
    private salesService: SalesService,
    private router: Router
  ) { }

  ngOnInit() {
      this.params = this.activatedRoute.snapshot.queryParams;
      this.job = this.SELECT_JOB.filter((job) => job.title === this.params.job )[0];
      this.salesService
          .$notification.subscribe( data => { if( data ) this.getRestult(data) } );
      
    this.salesService.currentCountry = this.params["abbr"];
  }
 

  getRestult( data: any ) {

    const cp = this.componentFactoryResolver.resolveComponentFactory(NotificationComponent);
    const cpRef =  this._cp.createComponent(cp);

    const { messsage, link } = data;
          
    (<NotificationComponent>cpRef.instance)
    .message = messsage;
    (<NotificationComponent>cpRef.instance)
    .navigate = () => { this.router.navigate(link.split('/'), { queryParamsHandling: 'merge' }) };
    setTimeout( () => this._cp.clear(), 4000 ) ;
    
 }

}
