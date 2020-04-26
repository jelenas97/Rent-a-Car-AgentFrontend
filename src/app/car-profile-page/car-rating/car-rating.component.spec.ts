import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRatingComponent } from './car-rating.component';

describe('CarRatingComponent', () => {
  let component: CarRatingComponent;
  let fixture: ComponentFixture<CarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
