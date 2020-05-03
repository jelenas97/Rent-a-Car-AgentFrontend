import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  constructor() { }

  showAgentInfo=true;

  ngOnInit(): void {
  }

  openAgentInfo(){
    this.showAgentInfo=true;

  }

  onNotify() {
  }
}
