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

  hideAll() {
    this.showAgentInfo = false;
    this.showAccept = false;
  }
  onNotify() {
    this.acceptRequests();
  }
}
