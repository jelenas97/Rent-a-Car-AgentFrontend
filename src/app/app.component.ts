import {Component} from '@angular/core';
import {GlobalCart} from '../app/shared/global';
import {MatDialog} from '@angular/material';
import {ShopCartComponent} from './rent-a-car-hp/shop-cart/shop-cart.component';
import {Advertisement} from './shared/model/advertisement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent-a-Car-AgentFrontend';
  cartAds: Advertisement[] = GlobalCart.cartAds;

  constructor(private _dialog: MatDialog) {
  }

  openCart() {
    const dialog = this._dialog.open(ShopCartComponent, {
      width: '30%',
      data: this.cartAds,
    });
    dialog.afterClosed().subscribe(result => {
      GlobalCart.cartAds = dialog.componentInstance.advertisements;
      this.cartAds = GlobalCart.cartAds;
    });

  }
}


