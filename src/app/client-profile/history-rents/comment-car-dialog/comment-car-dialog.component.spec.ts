import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCarDialogComponent } from './comment-car-dialog.component';

describe('CommentCarDialogComponent', () => {
  let component: CommentCarDialogComponent;
  let fixture: ComponentFixture<CommentCarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentCarDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentCarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
