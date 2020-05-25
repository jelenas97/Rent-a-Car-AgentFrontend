import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Rent} from '../../shared/model/rent';
import {RequestHolder} from '../../shared/model/request-holder';
import {GlobalCart} from '../../shared/global';
import {RentRequestService} from '../../service/rent-request.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any,
              private rentService: RentRequestService, private notifier: NotifierService) {
  }

  advertisements: Rent[];
  empty = true;
  requestHolder: RequestHolder;
  bundle: any = 'false';
  ngOnInit() {
    this.advertisements = this.data;
 //   console.log(this.advertisements.length);
  }

  onCancelDialog() {
    this.Cancel();
  }

  Cancel(): void {
    this.onClose();
  }

  onClose(): void {
    // set the closeMessage property here

    this.dialogRef.close('ref');
  }

  remove(ad: any) {
    console.log(ad);
    console.log(this.advertisements);
    const foundIndex = this.advertisements.findIndex(({advertisementId}) => advertisementId === ad.advertisementId);

    this.advertisements = this.advertisements.filter((_, index) => index !== foundIndex);

  }
  reserve() {
    this.requestHolder = new RequestHolder();
    this.requestHolder.bundle = this.bundle;
    this.requestHolder.rentRequests = GlobalCart.cartAds;
    console.log(this.bundle);
    console.log(this.requestHolder);
    this.rentService.sentRequest(this.requestHolder).subscribe(foundAds => {
      this.notifier.notify('success', 'Renting request sent! Please wait for answer :)');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 2000);
      this.Cancel();
      this.advertisements = [];
    });
  }

}
