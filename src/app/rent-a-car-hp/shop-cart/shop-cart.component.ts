import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Rent} from '../../shared/model/rent';
import {RequestHolder} from '../../shared/model/request-holder';
import {GlobalCart} from '../../shared/global';
import {AdvertisementService} from '../../service/advertisement.service';
import {RentRequestService} from '../../service/rent-request.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any,
              private rentService: RentRequestService) {
  }

  advertisements: Rent[];
  empty = true;
  requestHolder: RequestHolder;
  bundle: any;
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

    const foundIndex = this.advertisements.findIndex(({advertisementId}) => advertisementId === ad.id);
    this.advertisements = this.advertisements.filter((_, index) => index !== foundIndex);
    console.log(this.advertisements);
  }
  reserve() {
    this.requestHolder = new RequestHolder();
    this.requestHolder.bundle = this.bundle;
    this.requestHolder.rentRequests = GlobalCart.cartAds;
    console.log(this.requestHolder);
    this.rentService.sentRequest(this.requestHolder).subscribe(foundAds => {
      this.Cancel();
    });


  }

}
