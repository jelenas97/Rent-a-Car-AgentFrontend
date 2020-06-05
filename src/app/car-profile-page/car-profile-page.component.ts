import {Component, OnInit} from '@angular/core';
import {Car} from '../shared/model/car';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../service/car.service";
import {CarDto} from "../shared/model/car-dto";

@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  car: CarDto;
  carId: string;

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit() {
    this.car = new CarDto();
    this.car.imageGallery = [];
    this.car.fuelType = [];
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id');

    });
    this.carService.getCar(this.carId).subscribe(car => {
      this.car = car;
    });
  }

}
