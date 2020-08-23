import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetailedModalComponent } from './company-detailed-modal.component';

describe('CompanyDetailedModalComponent', () => {
  let component: CompanyDetailedModalComponent;
  let fixture: ComponentFixture<CompanyDetailedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetailedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
