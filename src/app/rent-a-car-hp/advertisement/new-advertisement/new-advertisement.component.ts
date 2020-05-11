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

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})
export class NewAdvertisementComponent implements OnInit {
  images: [];

  carModels: CarModel[];

  selectedCarBrand: CarBrand;
  selectedCarModel: CarModel;
  mileage: Number;

  advertisement: Advertisement2 = new Advertisement2();
  codeBook: CodeBook = new CodeBook();


  constructor(private codebookService: CodebookService) {
    this.advertisement.carBrand = new CarBrand();
  }

  ngOnInit() {
    this.codebookService.getCodeBookInfoModel().subscribe(codeBook => {
      this.codeBook = codeBook;
    });
  }

  updateBrand(value: CarBrand) {
    this.selectedCarBrand = this.advertisement.carBrand;
    this.carModels = this.selectedCarBrand.carModels;
  }

  updateModel(value: CarModel) {
    this.selectedCarModel = this.selectedCarBrand.carModels.find(e => e.id == value.id);
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
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
