import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentDialogComponent } from './pay-rent-dialog.component';

describe('PayRentDialogComponent', () => {
  let component: PayRentDialogComponent;
  let fixture: ComponentFixture<PayRentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayRentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
