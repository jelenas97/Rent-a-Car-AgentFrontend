import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  constructor() { }

  showAgentInfo = true;
  showAccept = false;
  showCreatePricelist=false;

  ngOnInit(): void {
  }

  openAgentInfo() {
    this.hideAll();
    this.showAgentInfo = true;
  }

  acceptRequests() {
    this.hideAll();
    this.showAccept = true;
  }

  createPricelist(){
    this.hideAll();
    this.showCreatePricelist = true;
  }

  hideAll() {
    this.showAgentInfo = false;
    this.showAccept = false;
    this.showCreatePricelist=false;
  }
  onNotify() {
    this.acceptRequests();
  }
}
