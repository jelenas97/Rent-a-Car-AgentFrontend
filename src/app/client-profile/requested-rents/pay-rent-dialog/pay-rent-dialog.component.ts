import { RentRequestService } from '../../../service/rent-request.service';
import { RentRequest } from '../../../shared/model/rent-request';
import { filter } from 'rxjs/operators';
import { AdvertisementService } from '../../../service/advertisement.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-pay-rent-dialog',
  templateUrl: './pay-rent-dialog.component.html',
  styleUrls: ['./pay-rent-dialog.component.css']
})
export class PayRentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,  @Inject(MAT_DIALOG_DATA) public data: any, private rrService: RentRequestService ) { }


  ngOnInit(): void {
    console.log(this.data);
  }

  yesPayRent(){

    this.rrService.payRentRequest(this.data._rentRequest.id).subscribe(result =>{
      console.log(result);
    })
    this.dialogRef.close(this.data._rentRequests);
   
  }

  dontPayRent(){
    this.dialogRef.close();
  }

}
