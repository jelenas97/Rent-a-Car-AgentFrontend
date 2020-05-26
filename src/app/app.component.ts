import {Component, OnInit} from '@angular/core';
import {GlobalCart} from './shared/global';
import {MatDialog} from '@angular/material';
import {ShopCartComponent} from './rent-a-car-hp/shop-cart/shop-cart.component';
import {Rent} from './shared/model/rent';
import {AuthService} from './service/auth.service';
import {User} from './shared/model/user';
import {Router} from '@angular/router';
import {ConfirmDialogComponent} from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rent-a-Car-AgentFrontend';
  cartAds: Rent[] = GlobalCart.cartAds;
  currUser: User;
  roles: string[];
  unauthorized: boolean;
  client: boolean;
  admin: boolean;
  agent: boolean;

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router,
              private notifier: NotifierService) {
    this.unauthorized = true;
  }

  openCart() {
    const dialog = this.dialog.open(ShopCartComponent, {
      width: '30%',
      data: this.cartAds,
    });
    dialog.afterClosed().subscribe(result => {
      GlobalCart.cartAds = dialog.componentInstance.advertisements;
      this.cartAds = GlobalCart.cartAds;
    });
  }

  ngOnInit(): void {
    this.currUser = this.authService.getCurrUser();
    console.log(this.currUser.roles);
    if (this.currUser.roles === undefined) {
      this.unauthorized = true;
      this.client = false;
      this.admin = false;
      this.agent = false;
    } else {
      if (this.currUser.roles != null) {
        this.set();
      }
    }
    this.router.navigate(['homepage']);
  }

  set() {
    if (this.currUser.roles.includes('ROLE_CLIENT')) {
      this.unauthorized = false;
      this.client = true;
      this.admin = false;
      this.agent = false;
      console.log('klijent');
    } else if (this.currUser.roles.includes('ROLE_ADMIN')) {
      this.unauthorized = false;
      this.client = false;
      this.agent = false;
      this.admin = true;
      console.log('admin');
    } else if (this.currUser.roles.includes('ROLE_AGENT')) {
      this.unauthorized = false;
      this.client = false;
      this.admin = false;
      this.agent = true;
      console.log('agent');
    }

  }
  logout() {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Logout',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.authService.logout();
        this.currUser.roles = null;
        this.currUser = null;
        this.unauthorized = true;
        this.client = false;
        this.admin = false;
        this.agent = false;
        this.removeCart();
        this.notifier.notify('success', 'Successfully log out!');
        setTimeout(() => {
          this.notifier.hideAll();
        }, 2000);
      }
    });
  }

  removeCart() {
    GlobalCart.cartAds = [];
    this.cartAds = GlobalCart.cartAds;
  }
}


