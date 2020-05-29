import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advertisement} from '../../shared/model/advertisement';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  @Input('advertisement') advertisement: Advertisement;
  @Output() notify = new EventEmitter<Advertisement>();
  private agent = false;
  constructor() {
    this.agent = true;
  }

  ngOnInit() {
  }

  addToCart(advertisement: any) {
    this.notify.emit(advertisement);
  }

}
