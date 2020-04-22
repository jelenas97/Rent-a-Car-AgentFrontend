import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentACarHpComponent } from './rent-a-car-hp.component';

describe('RentACarHpComponent', () => {
  let component: RentACarHpComponent;
  let fixture: ComponentFixture<RentACarHpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentACarHpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentACarHpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
