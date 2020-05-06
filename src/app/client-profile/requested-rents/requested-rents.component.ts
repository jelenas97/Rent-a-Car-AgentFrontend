import { RentRequest } from './../../shared/model/rent-request';
import { RentRequestService } from './../../service/rent-request.service';
import { CancelRentDialogComponent } from './cancel-rent-dialog/cancel-rent-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-requested-rents',
  templateUrl: './requested-rents.component.html',
  styleUrls: ['./requested-rents.component.css']
})
export class RequestedRentsComponent implements OnInit {

  _clientId: any =8;
  _rentRequests: RentRequest[];

  constructor(private _dialog: MatDialog, private _rentRequestService : RentRequestService) { }

  ngOnInit(): void {
    this.getRentRequests(this._clientId);
  
  }

  cancelRent(rentRequest){
    let dialog = this._dialog.open(CancelRentDialogComponent, {
      width: '30%',
      data: {_rentRequest : rentRequest, _rentRequests : this._rentRequests, _clientId : this._clientId},

    });
    dialog.afterClosed().subscribe(data => {
      this._rentRequests=data;
    });

  }

  getRentRequests(id){
    this._rentRequestService.getRentRequests(id).subscribe(rentRequests=>{
      console.log(rentRequests);
      this._rentRequests=rentRequests;
    })
  }

}