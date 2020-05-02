import { AdvertisementService } from './../../service/advertisement.service';
import { Rate } from './../../shared/model/rate';
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
  private checkedcolor:"black";
  private uncheckedcolor:"white";
  private _clientId : any;
  private rate : Rate;
 // private hide =true;

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any,
  private _advertisementService : AdvertisementService/*, private _notifier: NotifierService*/) { }

  _advertisement: any;

  ngOnInit() {
    this._advertisement = this.data._advertisement;
    this._clientId = this.data._clientId;
  }

  onRate($event:{oldValue:number, newValue:number, starRating:CarRatingDialogComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onSubmit(){
    this.rate = new Rate();
    this.rate.client_id = this._clientId;
    this.rate.rate = this._rate;
    this.rate.advertisement_id=this._advertisement.id;

    console.log(this.rate);

   /*this._advertisementService.rateAdvertisement(this.rate).subscribe(_advertisement => {
      this._notifier.notify("success", "Thank you for your review! ");
      setTimeout(() => {
      this._notifier.hideAll();
      }, 2000)
      this.dialogRef.close();
    })*/
  }
  
}
