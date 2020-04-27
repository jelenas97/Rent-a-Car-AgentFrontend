import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedAndHistoryRentsComponent } from './requested-and-history-rents.component';

describe('RequestedAndHistoryRentsComponent', () => {
  let component: RequestedAndHistoryRentsComponent;
  let fixture: ComponentFixture<RequestedAndHistoryRentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedAndHistoryRentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedAndHistoryRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
