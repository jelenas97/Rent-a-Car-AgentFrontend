import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Rent} from '../../shared/model/rent';
import {RequestHolder} from '../../shared/model/request-holder';
import {GlobalCart} from '../../shared/global';
import {RentRequestService} from '../../service/rent-request.service';
import {NotifierService} from 'angular-notifier';
import {User} from '../../shared/model/user';
import {AuthService} from '../../service/auth.service';
import {EmailService} from '../../service/email.service';
import {EmailClass} from '../../shared/model/email';
import {EmailConfig} from '../../service/email.config';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  currUser: User;

  advertisements: Rent[];
  empty = true;
  requestHolder: RequestHolder;
  bundle: any = 'false';

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any,
              private rentService: RentRequestService, private notifier: NotifierService,
              private authService: AuthService, private emailService: EmailService,
              private emailConfig: EmailConfig) {
  }

  ngOnInit() {
    this.advertisements = this.data;
 //   console.log(this.advertisements.length);
    this.currUser = this.authService.getCurrUser();
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
    this.requestHolder.rentRequests.forEach((element) => {
      console.log('Poslacu zahtjev za ovaj element ' + element);
    });
    const email = new EmailClass();
    email.content = this.emailConfig.getRentRequestSendMessage;
    console.log('Trenutni korisnik je : ' + this.currUser);
    email.email = this.currUser.email;

    console.log('Saljem email' + email);
    this.emailService.sendEmail(email).subscribe(foundAds => {
      console.log('Email sent');
    });

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
