import {Component, OnInit} from '@angular/core';
import {Car} from '../shared/model/car';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../service/car.service";
import {CarDto} from "../shared/model/car-dto";
import { CommentService } from '../service/comment.service';
import { RateService } from '../service/rate.service';
import {Rate} from '../shared/model/rate';

@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  car: CarDto;
  carId: string;
  comments:Comment[];
  rates: Rate[];

  constructor(private route: ActivatedRoute, private carService: CarService, private commentService: CommentService,
    private rateService : RateService) {
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

    this.getComments(this.carId);
    this.getAverageAdvertisementRate(this.carId);
  }

  getComments(id){
    this.commentService.getComments(id).subscribe(comments=>{
      console.log(comments);
      this.comments=comments;
    })
  }

  getAverageAdvertisementRate(id){
    this.rateService.getAverageAdvertisementRate(id).subscribe(rating=>{
      console.log(rating);
      this.rates=rating;
    })
  }

}
