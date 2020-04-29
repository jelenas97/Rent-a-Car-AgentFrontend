import {Component, OnInit} from '@angular/core';
import {Car} from '../shared/model/car';

@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  // @Input("car") car: Car;
  car: Car = {
    id: 1,
    limit: 300,
    image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
    mileage: 50000,
    kidSeats: 1,
    carClass: {id: 1, name: "SUV"},
    carBrand: {id: 1, name: "BMW", models: [{id: 1, name:"M5"}]},
    transmissionType: {id: 1, name: "Automatic"},
    fuelType: {id: 1, name: "Petrol"},
    collisionDamageWaiver: true,
    imageGallery: [
      'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg'

    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
