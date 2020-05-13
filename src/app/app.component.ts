import {Component, OnInit} from '@angular/core';
import {GlobalCart} from './shared/global';
import {MatDialog} from '@angular/material';
import {ShopCartComponent} from './rent-a-car-hp/shop-cart/shop-cart.component';
import {Rent} from './shared/model/rent';
import {AuthService} from './service/auth.service';
import {User} from './shared/model/user';

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

  constructor(private dialog: MatDialog, private authService: AuthService) {
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

    if (this.currUser.roles === null) {
      this.unauthorized = true;
      this.client = false;
      this.admin = false;
      this.agent = false;
    } else {
      if (this.currUser.roles.includes('ROLE_CLIENT')) {
        this.unauthorized = false;
        this.client = true;
        this.admin = false;
        this.agent = false;
      } else if (this.currUser.roles.includes('ROLE_ADMIN')) {
        this.unauthorized = false;
        this.client = false;
        this.agent = false;
        this.admin = true;
      } else if (this.currUser.roles.includes('ROLE_AGENT')) {
        this.unauthorized = false;
        this.client = false;
        this.admin = false;
        this.agent = true;
      }
    }

  }

  logout() {
    this.authService.logout();
    this.currUser.roles = null;
    this.currUser = null;
    this.ngOnInit();
    console.log(this.currUser.roles);
  }
}


