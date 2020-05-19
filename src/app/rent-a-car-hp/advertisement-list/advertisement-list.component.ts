import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Advertisement} from '../../shared/model/advertisement';


@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

  @Input('advertisements') advertisements: any;
  @Input('numOfAds') numOfAds: any;
  numOfAds2: any;
  @Output() notify = new EventEmitter<Advertisement>();
  show: any = false;
  constructor() {
  }
  ngOnInit() {
    this.numOfAds2 = this.numOfAds;
    this.show = true;
  }

  public onNotify(ad: any): void {
    this.notify.emit(ad);
  }

}
