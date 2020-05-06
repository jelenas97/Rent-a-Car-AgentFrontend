import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementStatisticsComponent } from './advertisement-statistics.component';

describe('AdvertisementStatisticsComponent', () => {
  let component: AdvertisementStatisticsComponent;
  let fixture: ComponentFixture<AdvertisementStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
