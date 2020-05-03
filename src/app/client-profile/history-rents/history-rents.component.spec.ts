import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRentsComponent } from './history-rents.component';

describe('HistoryRentsComponent', () => {
  let component: HistoryRentsComponent;
  let fixture: ComponentFixture<HistoryRentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
