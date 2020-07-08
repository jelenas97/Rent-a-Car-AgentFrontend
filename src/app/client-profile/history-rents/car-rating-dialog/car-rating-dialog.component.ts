import { AdvertisementService } from './../../../service/advertisement.service';
import { RentRequestService } from './../../../service/rent-request.service';
import { Rate } from '../../../shared/model/rate';
import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-car-rating-dialog',
  templateUrl: './car-rating-dialog.component.html',
  styleUrls: ['./car-rating-dialog.component.css']
})
export class CarRatingDialogComponent implements OnInit {

   _rate : any =0;

  private _clientId : any;
  private rate : Rate;
  private advId;
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any,
  private _rentRequestService : RentRequestService, private _advertisementService : AdvertisementService, private _notifier: NotifierService) { }

  _historyRentRequest:any;

  ngOnInit() {
    console.log(this.data);
    this._historyRentRequest=this.data._historyRentRequest;
    this._clientId = this.data._clientId;
  }

  onRate($event:{oldValue:number, newValue:number, starRating:CarRatingDialogComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}`);
  }

  rateAdv(){
    this.rate = new Rate();
    this.rate.client_id = this._clientId;
    this.rate.value = this._rate;
    this.rate.advertisement_id=this._historyRentRequest.advertisementId;
    this.rate.rent_request_id=this._historyRentRequest.id;

    console.log(this.rate);

   this._advertisementService.rateAdvertisement(this.rate).subscribe(_advertisement => {
    this._notifier.notify('success', 'Succesfully rated advertisement!');
    setTimeout(() => {
      this._notifier.hideAll();
    }, 2000);
    })
    this.dialogRef.close();
  }
  
}
