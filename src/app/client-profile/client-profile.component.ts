import { HistoryRentsComponent } from './history-rents/history-rents.component';
import { RequestedRentsComponent } from './requested-rents/requested-rents.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  constructor() { }

  //requestedAndHistoryRents : RequestedAndHistoryRentsComponent;

  showClientInfo=true;
  show=false;
  showHistoryRents=false;


  ngOnInit(): void {
  }
  
  openClientInfo(){
    this.showClientInfo=true;
    this.show=false;
    this.showHistoryRents=false;
  }

  openRequestAndHistoryRents(){
    this.showHistoryRents=false;
    this.show=true;
    this.showClientInfo=false;
  }

  openHistoryRents(){
    this.show=false;
    this.showHistoryRents=true;
    this.showClientInfo=false;
  }

  onNotify() {
  }


}
