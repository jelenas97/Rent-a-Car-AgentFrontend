import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../shared/model/user';



@Injectable()
export class AuthService {

  currUser: User;

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private router: Router
  ) {
    this.currUser = new User();
  }


  private accessToken = null;

  login(user) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      username : user.username,
      password : user.password,
    };
    return this.apiService.post(this.config.login_url, JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        this.accessToken = res.accessToken;
        this.currUser = res.user;
      }));
  }

  logout() {
    this.accessToken = null;
    this.router.navigate(['/login']);
  }

  getCurrUser() {
    return this.currUser;
  }

  tokenIsPresent() {
    return this.accessToken !== undefined && this.accessToken != null;
  }

  getToken() {
    return this.accessToken;
  }
}


