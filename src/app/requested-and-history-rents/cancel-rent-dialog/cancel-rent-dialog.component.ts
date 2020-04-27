import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-cancel-rent-dialog',
  templateUrl: './cancel-rent-dialog.component.html',
  styleUrls: ['./cancel-rent-dialog.component.css']
})
export class CancelRentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  yesCancelRent(){

  }

  dontCancelRent(){
    this.dialogRef.close();
  }

}
