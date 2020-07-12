import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPayDialogComponent } from './extra-pay-dialog.component';

describe('ExtraPayDialogComponent', () => {
  let component: ExtraPayDialogComponent;
  let fixture: ComponentFixture<ExtraPayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraPayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
