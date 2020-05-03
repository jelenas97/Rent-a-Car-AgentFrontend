import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedRentsComponent } from './requested-rents.component';

describe('RequestedAndHistoryRentsComponent', () => {
  let component: RequestedRentsComponent;
  let fixture: ComponentFixture<RequestedRentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedRentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
