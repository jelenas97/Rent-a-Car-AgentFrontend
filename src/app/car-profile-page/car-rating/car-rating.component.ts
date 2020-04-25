import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-rating',
  templateUrl: './car-rating.component.html',
  styleUrls: ['./car-rating.component.css']
})
export class CarRatingComponent implements OnInit {

  currentRate:2;
  checkedcolor:"black";
  uncheckedcolor:"white";

  constructor() { }

  ngOnInit() {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:CarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
