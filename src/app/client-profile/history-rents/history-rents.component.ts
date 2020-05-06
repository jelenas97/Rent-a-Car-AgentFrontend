import { RentRequestService } from './../../service/rent-request.service';
import { RentRequest } from './../../shared/model/rent-request';
import { CarRatingDialogComponent } from './car-rating-dialog/car-rating-dialog.component';
import { CommentCarDialogComponent } from './comment-car-dialog/comment-car-dialog.component';
import { Advertisement } from '../../shared/model/advertisement';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-history-rents',
  templateUrl: './history-rents.component.html',
  styleUrls: ['./history-rents.component.css']
})
export class HistoryRentsComponent implements OnInit {

  _clientId: any =8;
  _historyRentRequests : RentRequest[];


  constructor(private _dialog: MatDialog,  private _rentRequestService : RentRequestService) { }

  ngOnInit(): void {
    this.getHistoryRentRequests(this._clientId);
  }

  rateCar(historyRentRequest) {
    let dialog = this._dialog.open(CarRatingDialogComponent, {
      width: '30%',
      data: { _historyRentRequest : historyRentRequest,  _clientId : this._clientId}
    });
    dialog.afterClosed().subscribe(data => {

    });
  }

  commentCar(historyRentRequest) {
    let dialog = this._dialog.open(CommentCarDialogComponent, {
      width: '30%',
      data:  { _historyRentRequest : historyRentRequest,  _clientId : this._clientId}

    });
    dialog.afterClosed().subscribe(data => {

    });
  }

  getHistoryRentRequests(id:string){
    this._rentRequestService.getHistoryRentRequests(id).subscribe(historyRentRequests=> {
      console.log(historyRentRequests);
      this._historyRentRequests=historyRentRequests;
    })
  }

}
