import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompnayDetailedModalComponent } from './edit-compnay-detailed-modal.component';

describe('EditCompnayDetailedModalComponent', () => {
  let component: EditCompnayDetailedModalComponent;
  let fixture: ComponentFixture<EditCompnayDetailedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompnayDetailedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompnayDetailedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
