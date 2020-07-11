import {CommentOwner} from '../shared/model/commentOwner';
import {User} from './../shared/model/user';
import {Comment} from './../shared/model/comment';
import {AuthService} from './../service/auth.service';
import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarService} from "../service/car.service";
import {CarDto} from "../shared/model/car-dto";
import {CommentService} from '../service/comment.service';
import {RateService} from '../service/rate.service';
import {Rate} from '../shared/model/rate';
import {NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {NotifierService} from 'angular-notifier';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {AgmMap, GoogleMapsAPIWrapper, MapsAPILoader} from '@agm/core';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: object;
  zoom: number;
  address_level_1?: string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}


@Component({
  selector: 'app-car-profile-page',
  templateUrl: './car-profile-page.component.html',
  styleUrls: ['./car-profile-page.component.css']
})
export class CarProfilePageComponent implements OnInit {

  car: CarDto;
  carId: string;
  comments: CommentOwner[];
  rates: Rate;
  _content: String;
  _comment: Comment;
  currUser: User;
  _date: any;
  carOwner: boolean;

  latlng: string[];

  private stompClient;
  isLoaded: boolean = false;
  isCustomSocketOpened = false;
  showMap: boolean = false;
  geocoder: any;
  public location: Location = {
    lat: 45.275650,
    lng: 19.849281,
    marker: {
      lat: 45.275650,
      lng: 19.849281,
      draggable: true
    },
    zoom: 14
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(private route: ActivatedRoute, private carService: CarService, private commentService: CommentService,
              private rateService: RateService, private authService: AuthService, private _calendar: NgbCalendar,
              private _notifier: NotifierService, public mapsApiLoader: MapsAPILoader,
              private zone: NgZone, private wrapper: GoogleMapsAPIWrapper) {

    this._date = _calendar.getToday();
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.currUser = this.authService.getCurrUser();
    this.car = new CarDto();
    this.car.imageGallery = [];
    this.car.fuelType = [];
    this.route.paramMap.subscribe(params => {
      this.carId = params.get('id');

    });
    this.carService.getCar(this.carId).subscribe(car => {
      this.car = car;
      this.carOwner = false;
      if (this.authService.getCurrUser().id === this.car.ownerId) {
        this.carOwner = true;
      }
      console.log(car);
      this.getAverageAdvertisementRate(car.advertisementId);
      this.getComments(car.advertisementId);

    });

    this.initializeWebSocketConnection();
  }

  // Funkcija za otvaranje konekcije sa serverom
  initializeWebSocketConnection() {
    // serverUrl je vrednost koju smo definisali u registerStompEndpoints() metodi na serveru
    let ws = new SockJS("http://localhost:8084/socket");
    this.stompClient = Stomp.over(ws);
    let that = this;

    this.stompClient.connect({}, function () {
      that.isLoaded = true;
      that.openGlobalSocket()
    });

  }

  // Funckija za pretplatu na topic /socket-publisher (definise se u configureMessageBroker() metodi)
  // Globalni socket se otvara prilikom inicijalizacije klijentske aplikacije
  color: any;

  openGlobalSocket() {
    if (this.isLoaded) {
      this.stompClient.subscribe("/socket-publisher", (message: { body: string; }) => {
        this.handleResult(message);
      });
    }
  }

  handleResult(message: { body: string; }) {

    this.latlng = message.body.split(',');
    console.log(this.latlng);
    console.log(this.carId);
    if (this.latlng[2] === this.carId && this.carOwner === true) {
      this.showMap = true;
      this.location.marker.lat = Number(this.latlng[0]);
      this.location.marker.lng = Number(this.latlng[1]);
      this.location.lat = this.location.marker.lat;
      this.location.lng = this.location.marker.lng;
    }
  }

  getComments(id) {
    this.commentService.getComments(id).subscribe(comments => {
      console.log(comments);
      this.comments = comments;
    })
  }

  getAverageAdvertisementRate(id) {
    this.rateService.getAverageAdvertisementRate(id).subscribe(rating => {
      console.log(rating);
      this.rates = rating[0];
    })
  }

  addComment() {
    if (this._content != null) {
      this._comment = new Comment();
      this._comment.commenter_id = this.currUser.id;
      this._comment.content = this._content;
      let date = [this._date['year'], this._date['month'], this._date['day']];
      this._comment.date = date;
      this._comment.advertisement_id = this.car.advertisementId;
      console.log(this._comment);

      this.commentService.addCommentOwner(this._comment).subscribe(result => {
        this._notifier.notify('success', 'Succesfully added comment!');
        setTimeout(() => {
          this._notifier.hideAll();
        }, 2000);
      });
    }
  }

}
