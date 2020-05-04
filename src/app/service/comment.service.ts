import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {Comment} from '../shared/model/comment';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class CommentService{
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }
  getUnComments() {
    return this.apiService.get(this.configService.getComment_url).pipe(
      map(result => {
        return result;
      })
    );
  }
  changeStatus(comment: Comment) {
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.configService.getComment_url , JSON.stringify(comment), editHeaders)
      .pipe(map((res) => {
        console.log(res);
      }));
  }

}
