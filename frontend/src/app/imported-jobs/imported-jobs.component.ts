import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imported-jobs',
  templateUrl: './imported-jobs.component.html',
  styleUrls: ['./imported-jobs.component.scss']
})
export class ImportedJobsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log('here')
  }
};
