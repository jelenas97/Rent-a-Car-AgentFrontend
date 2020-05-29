import { UserService } from './../../service/user.service';
import { AgentService } from './../../service/agent.service';
import { Agent } from './../../shared/model/agent';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';
import { User } from './../../shared/model/user';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {
currUser: User;
agent ;
id;

  constructor(private authService: AuthService, private agentService: AgentService, private userService: UserService) {
    this.id=this.authService.getCurrUser();
   }

  ngOnInit(): void {
    this.currUser= this.authService.getCurrUser();
    this.agentService.getCurrentAgentInfo(this.authService.getCurrUser()).subscribe(agentInfo=>{
      this.agent=agentInfo;
    });
  }

}
