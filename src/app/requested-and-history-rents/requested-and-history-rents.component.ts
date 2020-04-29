import { CancelRentDialogComponent } from './cancel-rent-dialog/cancel-rent-dialog.component';
import { CommentCarDialogComponent } from './comment-car-dialog/comment-car-dialog.component';
import { CarRatingDialogComponent } from './car-rating-dialog/car-rating-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {Advertisement} from '../shared/model/advertisement';

@Component({
  selector: 'app-requested-and-history-rents',
  templateUrl: './requested-and-history-rents.component.html',
  styleUrls: ['./requested-and-history-rents.component.css']
})
export class RequestedAndHistoryRentsComponent implements OnInit {

  advertisements: Advertisement[] = [
    { id: 1, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 4000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1, transmissionType: "automatic", fuelType: "petrol", rate: 1, name: "Car A" },
    { id: 2, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg", mileage: 3000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 3, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car B" },
    { id: 3, kilometresLimit: 200, discount: 10, cwd: true, image: "https://image.made-in-china.com/2f0j00zFJQUkHsbDpb/4-Wheel-Small-Electric-Car-Professional-Design-2-Doors.jpg", mileage: 50000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 2, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 4, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 4, transmissionType: "automatic", fuelType: "petrol", rate: 5, name: "Car A" },
    { id: 5, kilometresLimit: 200, discount: 10, cwd: true, image: "https://www.pvnautoparts.com/image/pvnautoparts/image/cache/data/Car%20Photos/cNBc5ZMb1568434447-256x256.jpg", mileage: 1000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 5, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
  ];

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  cancelRent(advertisement){
    let dialog = this._dialog.open(CancelRentDialogComponent, {
      width: '30%'

    });
    dialog.afterClosed().subscribe(data => {

    });

  }

  rateCar(advertisement) {
    let dialog = this._dialog.open(CarRatingDialogComponent, {
      width: '30%'

    });
    dialog.afterClosed().subscribe(data => {

    });
  }

  commentCar(advertisement) {
    let dialog = this._dialog.open(CommentCarDialogComponent, {
      width: '30%'

    });
    dialog.afterClosed().subscribe(data => {

    });
  }


}
