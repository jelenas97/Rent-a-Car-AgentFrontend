import { Router } from '@angular/router';
import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../shared/model/user';



@Injectable()
export class AuthService {

  currUser: User;

  constructor(
    private apiService: ApiService,
    private config: ConfigService,
    private router: Router,
    private httpClient: HttpClient
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

  getUserByUsername(username: string) {
    return this.httpClient.post<User>(this.config.userUrl + '/username', username);
  }
}


