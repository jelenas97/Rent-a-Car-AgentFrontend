import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-rating-dialog',
  templateUrl: './car-rating-dialog.component.html',
  styleUrls: ['./car-rating-dialog.component.css']
})
export class CarRatingDialogComponent implements OnInit {

  currentRate:2;
  checkedcolor:"black";
  uncheckedcolor:"white";
 // private hide =true;
  constructor() { }

  ngOnInit() {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:CarRatingDialogComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onSubmit(){

  }
  
}
