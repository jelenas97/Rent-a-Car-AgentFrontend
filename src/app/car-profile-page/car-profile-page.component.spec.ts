import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProfilePageComponent } from './car-profile-page.component';

describe('CarProfilePageComponent', () => {
  let component: CarProfilePageComponent;
  let fixture: ComponentFixture<CarProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
