import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovingCommentsComponent } from './approving-comments.component';

describe('ApprovingCommentsComponent', () => {
  let component: ApprovingCommentsComponent;
  let fixture: ComponentFixture<ApprovingCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovingCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovingCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
