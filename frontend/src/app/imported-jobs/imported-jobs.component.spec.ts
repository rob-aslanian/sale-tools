import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportedJobsComponent } from './imported-jobs.component';

describe('ImportedJobsComponent', () => {
  let component: ImportedJobsComponent;
  let fixture: ComponentFixture<ImportedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
