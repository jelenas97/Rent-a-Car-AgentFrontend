import { Component, OnInit } from '@angular/core';
import {CarModel} from "../../../shared/model/car-model";
import {CarBrand} from "../../../shared/model/car-brand";
import {CarClass} from "../../../shared/model/car-class";
import {FuelType} from "../../../shared/model/fuel-type";
import {TransmissionType} from "../../../shared/model/transmission-type";
import {Advertisement} from "../../../shared/model/advertisement";
import {Advertisement2} from "../../../shared/model/advertisement2";

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})
export class NewAdvertisementComponent implements OnInit {
  images: [];

  carBrands: CarBrand[] = [
    {id:1, name:"Toyota", models: [{id:1,name: "Yaris"}]},
    {id:2, name:"BMW", models: [{id:2, name: "X5"},{id:3, name: "X3"}]},
  ];
  carClass: CarClass[] = [
    {id:1, name: "SUV"},
    {id:2, name: "Hatchback"}
  ];
  fuelTypes: FuelType[] = [
    {id:1, name:"Gasoline"},
    {id:2, name:"Diesel"},
  ];
  transmissionTypes: TransmissionType[] = [
    {id:1, name:"Manual"},
    {id:2, name:"Automatic"}
  ];
  carModels: CarModel[];

  selectedCarBrand: CarBrand;
  selectedCarModel: CarModel;
  selectedCarClass: CarClass;
  selectedTransmissionType: TransmissionType;
  selectedFuelType: FuelType;
  mileage: Number;
  kidsSeats: Number;
  availableTracking: Boolean;
  kilometresLimit: Number;
  cdw: Boolean;

  advertisement: Advertisement2 = new Advertisement2();
  constructor() { }

  ngOnInit() {
    this.advertisement.carBrand = new CarBrand();
  }

  updateBrand(value: number) {
    this.selectedCarBrand = this.advertisement.carBrand;
    this.carModels = this.selectedCarBrand.models;
  }

  updateModel(value: CarModel) {
    this.selectedCarModel = this.selectedCarBrand.models.find(e => e.id == value.id);
  }

  updateClass(value: CarClass) {
    this.selectedCarClass = this.carClass.find(e => e.id == value.id);

  }

  updateTransmissionType(value: TransmissionType) {
    this.selectedTransmissionType = this.transmissionTypes.find(e => e.id == value.id);

  }

  updateFuelType(value: FuelType) {
    this.selectedFuelType = this.fuelTypes.find(e => e.id == value.id);

  }

  onSubmit() {
    console.log(this.advertisement);
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.images = [];
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event:any) => {
          console.log(event.target.result);
          // @ts-ignore
          this.images.push(event.target.result);
          this.advertisement.imageGallery = this.images;
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
