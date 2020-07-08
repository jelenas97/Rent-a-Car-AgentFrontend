import { User } from './../shared/model/user';
import { UserService } from './user.service';
import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  currentUser: User;

  constructor(private apiService: ApiService, private config: ConfigService, private userService: UserService) {
      this.currentUser = this.userService.currentUser;
  }

  getCurrentAgentInfo(currentUser) {
    return this.apiService.get(this.config.agentUrl + '/' + currentUser.id ).pipe(map(agentInfo => {
            console.log(agentInfo);
            return agentInfo;
        }));
    }

}
