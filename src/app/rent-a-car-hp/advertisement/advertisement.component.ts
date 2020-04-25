import { Component, OnInit,Input } from '@angular/core';
import { Advertisement } from 'src/app/shared/model/Advertisement';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  
  @Input("advertisement") advertisement : Advertisement;
  ads : Advertisement[] = [];
  constructor() {

   }

  ngOnInit() {
  }
  addToCart(advertisement : Advertisement){
   
    this.ads.push(advertisement);
    
    console.log(this.ads);
  }
}
