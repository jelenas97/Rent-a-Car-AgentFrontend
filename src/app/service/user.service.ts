import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService, private config: ConfigService) {

  }

  getMyInfo() {
    return this.apiService.get(this.config.whoAmIUrl)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user)); // sacuvaju se osnovni podaci o ulogovanom useru
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        console.log(user.authorities[0].authority);
        return user;
      }));
  }
  editInfo(user) {
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.config.user_url, JSON.stringify(user), editHeaders)
      .pipe(map((res) => {
        console.log(res);
      }));
  }

  changePassword(user) {
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.config.passChangeUrl, JSON.stringify(user), editHeaders)
      .pipe(map((res) => {
        console.log(res);
      }));
  }
  getUsers() {
    return this.apiService.get(this.config.user_url)
      .pipe(map(users => {
        return users;
      }));
  }
  changeStatus(user) {
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.config.user_url + '/changeStatus', JSON.stringify(user), editHeaders)
      .pipe(map((res) => {
        console.log(res);
      }));
  }

}
