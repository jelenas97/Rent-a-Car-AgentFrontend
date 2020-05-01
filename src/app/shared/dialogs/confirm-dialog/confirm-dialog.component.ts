import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  confirm: any = 'no';
  ngOnInit(): void {
  }
  Cancel(): void {
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close(this.confirm);
  }
  clickedYes(){
    this.confirm = 'yes';
    this.onClose();
  }
  Open() {
    this.dialogRef.close('Select_model');
  }

}
