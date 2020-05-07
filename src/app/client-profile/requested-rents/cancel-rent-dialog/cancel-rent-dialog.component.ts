import { filter } from 'rxjs/operators';
import { AdvertisementService } from '../../../service/advertisement.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cancel-rent-dialog',
  templateUrl: './cancel-rent-dialog.component.html',
  styleUrls: ['./cancel-rent-dialog.component.css']
})
export class CancelRentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,  @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data);
  }

  yesCancelRent(){

    //cancel na back-u
    this.data._rentRequests = this.data._rentRequests.filter(x => x.id !== this.data._rentRequest.id);
    this.dialogRef.close(this.data._rentRequests);
   
  }

  dontCancelRent(){
    this.dialogRef.close();
  }

}
