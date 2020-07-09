import { CommentOwner } from '../shared/model/commentOwner';
import { User } from './../shared/model/user';
import { Comment } from './../shared/model/comment';
import { AuthService } from './../service/auth.service';
import {Component, OnInit} from '@angular/core';
import {Car} from '../shared/model/car';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../service/car.service";
import {CarDto} from "../shared/model/car-dto";
import { CommentService } from '../service/comment.service';
import { RateService } from '../service/rate.service';
import {Rate} from '../shared/model/rate';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  car: CarDto;
  carId: string;
  comments:CommentOwner[];
  rates: Rate;
  _content :String;
  _comment: Comment;
  currUser: User;
  _date: any;
  carOwner:boolean;

  constructor(private route: ActivatedRoute, private carService: CarService, private commentService: CommentService,
    private rateService : RateService, private authService: AuthService,  private _calendar: NgbCalendar,
    private _notifier: NotifierService) {
      
      this._date =_calendar.getToday();
  }

  ngOnInit() {
    this.currUser=this.authService.getCurrUser();
    this.car = new CarDto();
    this.car.imageGallery = [];
    this.car.fuelType = [];
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id');

    });
    this.carService.getCar(this.carId).subscribe(car => {
      this.car = car;
      this.carOwner=false;
      if(this.authService.getCurrUser().id==this.car.ownerId){
        this.carOwner=true;
      }
      console.log(car);
      this.getAverageAdvertisementRate(car.advertisementId);
      this.getComments(car.advertisementId);
     
    });

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
      this.rates=rating[0];
    })
  }

  addComment(){
    if(this._content!=null){
      this._comment= new Comment();
      this._comment.commenter_id= this.currUser.id;
      this._comment.content= this._content;
      let date = [this._date['year'],this._date['month'],this._date['day']];
      this._comment.date= date;
      this._comment.advertisement_id=this.car.advertisementId;
      console.log(this._comment);

      this.commentService.addCommentOwner(this._comment).subscribe(result =>{
        this._notifier.notify('success', 'Succesfully added comment!');
        setTimeout(() => {
        this._notifier.hideAll();
        }, 2000);
      });
    }
  }

}
