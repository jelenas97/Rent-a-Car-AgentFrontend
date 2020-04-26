import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import { Advertisement } from 'src/app/shared/model/Advertisement';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  
  @Input("advertisement") advertisement : Advertisement;
  ads : Advertisement[] = [];
  @Output() notify = new EventEmitter<Advertisement>();
  constructor() {

   }

  ngOnInit() {
  }

  addToCart(advertisement : any) {
    this.notify.emit(advertisement);
  }
 
}
