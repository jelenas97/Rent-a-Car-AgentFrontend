import { AuthService } from './../../service/auth.service';
import { User } from './../../shared/model/user';
import { RentRequest } from './../../shared/model/rent-request';
import { RentRequestService } from './../../service/rent-request.service';
import { CancelRentDialogComponent } from './cancel-rent-dialog/cancel-rent-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {MessageService} from "../../service/message.service";
import {Message} from "../../shared/model/message";
import {NotifierService} from "angular-notifier";
import { PayRentDialogComponent} from './pay-rent-dialog/pay-rent-dialog.component';

@Component({
  selector: 'app-requested-rents',
  templateUrl: './requested-rents.component.html',
  styleUrls: ['./requested-rents.component.css']
})
export class RequestedRentsComponent implements OnInit {

  currUser : User;
  _rentRequests: RentRequest[];
  _paidRentRequests: RentRequest[];

  constructor(private notifier: NotifierService, private _dialog: MatDialog, private _rentRequestService : RentRequestService, private authService: AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.currUser=this.authService.getCurrUser();
    this.getRentRequests(this.authService.getCurrUser().id);
    this.getPaidRentRequests(this.authService.getCurrUser().id);

  }

  cancelRent(rentRequest){
    let dialog = this._dialog.open(CancelRentDialogComponent, {
      width: '30%',
      data: {_rentRequest : rentRequest, _rentRequests : this._rentRequests, _clientId : this.currUser.id},

    });
    dialog.afterClosed().subscribe(data => {
      this._rentRequests=data;
    });

  }

  payRent(rentRequest){
    let dialog = this._dialog.open(PayRentDialogComponent, {
      width: '30%',
      data: {_rentRequest : rentRequest, _rentRequests : this._rentRequests, _clientId : this.currUser.id},

    });
    dialog.afterClosed().subscribe(data => {
      this._rentRequests=data;
    });

  }

  getRentRequests(id){
    this._rentRequestService.getRentRequests(id).subscribe(rentRequests=>{
      console.log(rentRequests);
      this._rentRequests=rentRequests;
    });
  }

  getPaidRentRequests(id){
    this._rentRequestService.getPaidRentRequests(id).subscribe(rentRequests=>{
      console.log(rentRequests);
      this._paidRentRequests=rentRequests;
    });
  }


}
