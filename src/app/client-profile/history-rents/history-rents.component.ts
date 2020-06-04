import { NotifierService } from 'angular-notifier';
import { AuthService } from './../../service/auth.service';
import { User } from './../../shared/model/user';
import { RentRequestService } from './../../service/rent-request.service';
import { RentRequest } from './../../shared/model/rent-request';
import { CarRatingDialogComponent } from './car-rating-dialog/car-rating-dialog.component';
import { CommentCarDialogComponent } from './comment-car-dialog/comment-car-dialog.component';
import { Advertisement } from '../../shared/model/advertisement';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DOCUMENT } from '@angular/common'; 


@Component({
  selector: 'app-history-rents',
  templateUrl: './history-rents.component.html',
  styleUrls: ['./history-rents.component.css']
})
export class HistoryRentsComponent implements OnInit {

  currUser : User;
  _historyRentRequests : RentRequest[];
  remove: boolean;

  constructor(private _dialog: MatDialog,  private _rentRequestService : RentRequestService,
      private authService: AuthService, private notifier : NotifierService, @Inject(DOCUMENT) document) { }

  ngOnInit(): void {
    this.currUser=this.authService.getCurrUser();
    this.getHistoryRentRequests(this.authService.getCurrUser().id);
  }

  rateCar(historyRentRequest) {
    let dialog = this._dialog.open(CarRatingDialogComponent, {
      width: '30%',
      data: { _historyRentRequest : historyRentRequest,  _clientId : this.currUser.id}
    });
    dialog.afterClosed().subscribe();
  }

  commentCar(historyRentRequest) {
    let dialog = this._dialog.open(CommentCarDialogComponent, {
      width: '30%',
      data:  { _historyRentRequest : historyRentRequest,  _clientId : this.currUser.id}

    });
    dialog.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

  getHistoryRentRequests(id:string){
    this._rentRequestService.getHistoryRentRequests(id).subscribe(historyRentRequests=> {
      console.log(historyRentRequests.length);
      this._historyRentRequests=historyRentRequests;
    })
  }

}
