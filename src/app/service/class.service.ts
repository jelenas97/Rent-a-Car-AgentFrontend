import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  newClass(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.classUrl , name, editHeaders).pipe(
      map(result => {
        console.log('New class added' + result);

      })
    );
  }

  deleteClass(id: number) {
    return this.apiService.delete(this.configService.classUrl + '/' + id).pipe(
      map(result => {
        console.log('Class deleted id: ' + id);
      })
    );
  }
}
