import { Component, OnInit } from '@angular/core';
import {CarModel} from "../../../shared/model/car-model";
import {CarBrand} from "../../../shared/model/car-brand";
import {CarClass} from "../../../shared/model/car-class";
import {FuelType} from "../../../shared/model/fuel-type";
import {TransmissionType} from "../../../shared/model/transmission-type";
import {Advertisement} from "../../../shared/model/advertisement";
import {Advertisement2} from "../../../shared/model/advertisement2";
import {CodebookService} from "../../../service/codebook.service";
import {CodeBook} from "../../../shared/model/codeBook";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {Car} from "../../../shared/model/car";
import {AdvertisementListComponent} from "../../advertisement-list/advertisement-list.component";
import {AdvertisementService} from "../../../service/advertisement.service";
import {NotifierService} from "angular-notifier";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {User} from "../../../shared/model/user";
import {AdvertisementMicro} from "../../../shared/model/advertisement-micro";


@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})
export class NewAdvertisementComponent implements OnInit {
  images: [];

  carModels: CarModel[];
  showDate;
  selectedCarBrand: CarBrand;
  selectedCarModel: CarModel;
  mileage: Number;
  isVisible : boolean = false;

  advertisement: AdvertisementMicro = new AdvertisementMicro();
  codeBook: CodeBook = new CodeBook();
  currUser: User;

  constructor(private codebookService: CodebookService, private advertisementService: AdvertisementService, private notifier: NotifierService, private router: Router, private authService: AuthService) {
    this.advertisement.car = new Car();
    this.advertisement.car.carBrand = new CarBrand();
    this.advertisement.car.fuelType = [];
    this.advertisement.car.availableTracking = false;
  }

  ngOnInit() {
    this.currUser= this.authService.getCurrUser();

    this.codebookService.getCodeBookInfoModel(this.currUser.id).subscribe(codeBook => {
      this.codeBook = codeBook;
    });
  }

  updateBrand(value: CarBrand) {
    this.selectedCarBrand = this.advertisement.car.carBrand;
    this.carModels = this.selectedCarBrand.carModels;
  }

  updateModel(value: CarModel) {
    this.selectedCarModel = this.selectedCarBrand.carModels.find(e => e.id == value.id);
  }

  onSubmit() {
    console.log(this.advertisement);
    this.advertisement.ownerId = this.currUser.id;
    if(this.advertisement.car.carBrand == null)
    {
      this.notifier.notify('warning','You must select car brand!');
      return;
    }
    if(this.advertisement.car.carModel == null)
    {
      this.notifier.notify('warning','You must select car model!');
      return;
    }
    if(this.advertisement.car.carClass == null)
    {
      this.notifier.notify('warning', 'You must select car class!');
      return;
    }
    if(this.advertisement.car.transmissionType == null)
    {
      this.notifier.notify("warning","You must select transmission type!");
      return;
    }
    if(this.advertisement.car.fuelType == null)
    {
      this.notifier.notify("warning","You must select car fuel type!");
      return;
    }
    if(this.advertisement.car.mileage == null)
    {
      this.notifier.notify("warning","You must enter car mileage!");
      return;
    }
    if(this.advertisement.car.kidSeats == null)
    {
      this.notifier.notify("warning","You must enter number of kids seats!");
      return;
    }

    if(this.advertisement.car.imageGallery == null || this.advertisement.car.imageGallery == [])
    {
      this.notifier.notify("warning","You must import at least one image of your car!");
      return;
    }
    if(this.advertisement.kilometresLimit == null)
    {
      this.notifier.notify("warning","You must define kilometres limit of your advertisement!");
      return;
    }
    if(this.advertisement.priceList == null)
    {
      this.notifier.notify("warning","You must choose price list for your advertisement!");
      return;
    }
    if(this.advertisement.discount == null)
    {
      this.notifier.notify("warning","You must define advertisement discount!");
      return;
    }
    if(this.advertisement.place == null)
    {
      this.notifier.notify("warning","You must define place where your car is available!");
      return;
    }
    if(this.advertisement.endDate == null || this.advertisement.endDate == undefined)
    {
      this.notifier.notify("warning","You must select end date of period of availability!");
      return;
    }
    if(this.advertisement.startDate == null || this.advertisement.startDate == undefined)
    {
      this.notifier.notify("warning","You must select start date of period of availability!");
      return;
    }
    if(this.advertisement.startDate > this.advertisement.endDate) {
      this.notifier.notify("warning","Start date can not be after end date!");
      return;
    }


    this.advertisementService.addAdvertisement(this.advertisement).subscribe(message => {
      this.notifier.notify("success","You have succesfully created advertisement for your car!");
      setTimeout(() => {
        this.notifier.hideAll();
        this.router.navigate(['/homepage']);
      }, 2000);
    },
      error => {
        this.notifier.notify("error", error.error);
      });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.images = [];
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event:any) => {
          //console.log(event.target.result);
          // @ts-ignore
          this.images.push(event.target.result);
          this.advertisement.car.imageGallery = this.images;

        };


      }
    }
  }
  ShowHide() {
    this.isVisible = this.showDate;
  }

}
