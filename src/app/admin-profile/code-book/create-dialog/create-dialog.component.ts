import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,) {

  }

  newType: any;
  ngOnInit(): void {

  }
  Cancel(): void {
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
  Create() {
    console.log(this.newType);
    this.dialogRef.close(this.newType);
  }



}
