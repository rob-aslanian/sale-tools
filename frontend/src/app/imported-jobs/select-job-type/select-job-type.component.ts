import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SELECT_JOB } from '../select-country/model';

@Component({
  selector: 'app-select-job-type',
  templateUrl: './select-job-type.component.html',
  styleUrls: ['./select-job-type.component.scss']
})
export class SelectJobTypeComponent implements OnInit {

  params: any = null;

  SELECT_JOB = SELECT_JOB;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
      
   }

  ngOnInit() {
    this.params = this.activatedRoute.snapshot.queryParams;
  }

}
