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
  show = false;
  showHistoryRents = false;
  showAccept = false;

  ngOnInit(): void {
  }

  openClientInfo() {
    this.hideAll();
    this.showClientInfo = true;
  }

  openRentRequests() {
    this.hideAll();
    this.show = true;
    this.showClientInfo = false;
  }

  openHistoryRents() {
    this.hideAll();
    this.showHistoryRents = true;
  }

  acceptOrRejectRequests() {
    this.hideAll();
    this.showAccept = true;
  }

  hideAll() {
    this.show = false;
    this.showHistoryRents = false;
    this.showClientInfo = false;
    this.showAccept = false;
  }

  onNotify() {
  }


}
