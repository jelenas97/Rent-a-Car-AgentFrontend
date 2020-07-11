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
    return this.apiService.get(this.configService.commentUrl).pipe(
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
    return this.apiService.put(this.configService.commentUrl , JSON.stringify(comment), editHeaders)
      .pipe(map((res) => {
        console.log(res);
      }));
  }

  addComment(comment: Comment){
    console.log(comment);

    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.commentUrl , comment, editHeaders).pipe(
      map(result => {
        console.log('New comment added ' + result);
      })
    );
  }

  addCommentOwner(comment: Comment) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.commentUrl + '/owner' , comment, editHeaders).pipe(
      map(result => {
        console.log('New comment added ' + result);
      })
    );
  }

  getComments(id: string) {
    return this.apiService.get(this.configService.commentUrl + '/' + id).pipe(
      map(result => {
        return result;
      })
    );
  }

}
