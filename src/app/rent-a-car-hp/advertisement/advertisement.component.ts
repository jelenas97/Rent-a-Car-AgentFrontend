import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advertisement} from '../../shared/model/advertisement';
import {AuthService} from "../../service/auth.service";
import {User} from "../../shared/model/user";

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  @Input('advertisement') advertisement: Advertisement;
  @Output() notify = new EventEmitter<Advertisement>();
  agent: any = false;
  yourCar = false;
  currUser: User;

  constructor(private authService: AuthService) {
    this.currUser = this.authService.getCurrUser();
    console.log(this.currUser);
    console.log("Oglas" + this.advertisement);
    if (this.currUser.roles !== undefined) {
      if (this.currUser.roles !== null) {
        if (this.currUser.roles.includes('ROLE_AGENT')) {
          this.agent = true;

        }
      }
    }
  }

  ngOnInit() {
  }

  addToCart(advertisement: any) {
    this.notify.emit(advertisement);
  }

}
