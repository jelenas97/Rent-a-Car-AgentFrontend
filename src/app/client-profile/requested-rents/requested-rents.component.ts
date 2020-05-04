import { CancelRentDialogComponent } from './cancel-rent-dialog/cancel-rent-dialog.component';
import { CommentCarDialogComponent } from '../history-rents/comment-car-dialog/comment-car-dialog.component';
import { CarRatingDialogComponent } from '../history-rents/car-rating-dialog/car-rating-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {Advertisement} from '../../shared/model/advertisement';

@Component({
  selector: 'app-requested-rents',
  templateUrl: './requested-rents.component.html',
  styleUrls: ['./requested-rents.component.css']
})
export class RequestedRentsComponent implements OnInit {

  _clientId: any =1;
  advertisements: Advertisement[] = [
    { id: 1, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 4000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1, transmissionType: "automatic", fuelType: "petrol", rate: 1, name: "Car A", model: "ddw" },
    { id: 4, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 4, transmissionType: "automatic", fuelType: "petrol", rate: 5, name: "Car A", model: "ddw" },
    { id: 2, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg", mileage: 3000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 3, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car B", model: "ddw" },
    { id: 3, kilometresLimit: 200, discount: 10, cwd: true, image: "https://image.made-in-china.com/2f0j00zFJQUkHsbDpb/4-Wheel-Small-Electric-Car-Professional-Design-2-Doors.jpg", mileage: 50000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 2, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A", model: "ddw" },
    { id: 5, kilometresLimit: 200, discount: 10, cwd: true, image: "https://www.pvnautoparts.com/image/pvnautoparts/image/cache/data/Car%20Photos/cNBc5ZMb1568434447-256x256.jpg", mileage: 1000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 5, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A", model: "ddw" },
  ];


  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {

   /* this._route.paramMap.subscribe(params => { this._customerId = params.get('id'); });*/
  }

  cancelRent(advertisement){
    let dialog = this._dialog.open(CancelRentDialogComponent, {
      width: '30%',
      data: {_advertisement : advertisement, _advertisements : this.advertisements, _clientId : this._clientId},

    });
    dialog.afterClosed().subscribe(data => {
      this.advertisements=data;
    });

  }

}
