import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {EmailConfig} from "./email.config";
import {EmailClass} from "../shared/model/email";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private apiService: ApiService, private emailConfig: EmailConfig) {
  }

  sendEmail(email: EmailClass) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.emailConfig.sendEmailUrl + '/', email, editHeaders).pipe(
      map(result => {
        console.log('New message added' + result);
      })
    );
  }
}
