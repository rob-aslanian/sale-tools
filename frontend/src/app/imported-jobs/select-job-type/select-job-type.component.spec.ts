import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectJobTypeComponent } from './select-job-type.component';

describe('SelectJobTypeComponent', () => {
  let component: SelectJobTypeComponent;
  let fixture: ComponentFixture<SelectJobTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectJobTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectJobTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
