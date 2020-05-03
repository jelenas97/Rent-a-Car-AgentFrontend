import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRentDialogComponent } from './cancel-rent-dialog.component';

describe('CancelRentDialogComponent', () => {
  let component: CancelRentDialogComponent;
  let fixture: ComponentFixture<CancelRentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelRentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelRentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
