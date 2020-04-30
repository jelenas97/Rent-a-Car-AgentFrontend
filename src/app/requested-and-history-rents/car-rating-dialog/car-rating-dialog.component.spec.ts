import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRatingDialogComponent } from './car-rating-dialog.component';

describe('CarRatingComponent', () => {
  let component: CarRatingDialogComponent;
  let fixture: ComponentFixture<CarRatingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRatingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRatingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
