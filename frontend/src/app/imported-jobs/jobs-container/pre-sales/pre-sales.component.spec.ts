import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreSalesComponent } from './pre-sales.component';

describe('PreSalesComponent', () => {
  let component: PreSalesComponent;
  let fixture: ComponentFixture<PreSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
