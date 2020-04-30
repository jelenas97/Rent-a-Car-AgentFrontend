import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }
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

}
