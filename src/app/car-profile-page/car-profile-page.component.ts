import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/shared/model/Car';

@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  //@Input("car") car: Car;
  car: Car={
    id: 1,
    limit: 300,
    image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg" ,
    mileage: 50000,
    kidSeats: 1,
    carClass: "SUV",
    carBrand: "BMW",
    transmissionType: "Automatic",
    carModel: "M5",
    fuelType: "Petrol",
    collisionDamageWaiver: "Yes",
    imageGallery: [
      "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",
      "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",
      "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",
      "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",
      "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg"
      
  ]
  }

  constructor() { }

  ngOnInit() {
  }

}
