import { RentRequestService } from '../../../service/rent-request.service';
import { RentRequest } from '../../../shared/model/rent-request';
import { filter } from 'rxjs/operators';
import { AdvertisementService } from '../../../service/advertisement.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-extra-pay-dialog',
  templateUrl: './extra-pay-dialog.component.html',
  styleUrls: ['./extra-pay-dialog.component.css']
})
export class ExtraPayDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>,  @Inject(MAT_DIALOG_DATA) public data: any, private rrService: RentRequestService ) { }


  ngOnInit(): void {
    console.log(this.data);
  }

  yesExtraPayRent(){

    this.rrService.extraPayRentRequest(this.data._historyRentRequest.id).subscribe(result =>{
      console.log(result);
    })
    this.dialogRef.close(this.data._rentRequests);
   
  }

  dontExtraPayRent(){
    this.dialogRef.close();
  }

}
