import {RentRequestService} from './../service/rent-request.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  constructor(private rentRequestService: RentRequestService) { }

  showClientInfo = true;
  showRequestedRents = false;
  showHistoryRents = false;
  showAccept = false;
  showCreatePricelist=false;

  ngOnInit(): void {
  }

  openClientInfo() {
    this.hideAll();
    this.showClientInfo = true;
  }

  openRentRequests() {
    this.hideAll();
    this.showRequestedRents = true;
  }

  openHistoryRents() {
    this.hideAll();
    this.showHistoryRents = true;
  }

  acceptOrRejectRequests() {
    this.hideAll();
    this.showAccept = true;
  }

  createPricelist() {
    this.hideAll();
    this.showCreatePricelist = true;
  }

  hideAll() {
    this.showRequestedRents = false;
    this.showHistoryRents = false;
    this.showClientInfo = false;
    this.showAccept = false;
    this.showCreatePricelist=false;
  }

  onNotify() {
    this.acceptOrRejectRequests();
  }


}
