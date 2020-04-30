import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Advertisement} from '../../shared/model/advertisement';


@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

  @Input('advertisements') advertisements: any;
  @Output() notify = new EventEmitter<Advertisement>();

  constructor() {
  }
  ngOnInit() {

  }
  public onNotify(ad: any): void {
    this.notify.emit(ad);
  }

}
