import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClassService {
  constructor(private apiService: ApiService) {
  }

  newClass(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post('http://localhost:8083/class' , name, editHeaders).pipe(
      map(result => {
        console.log('New class added' + result);

      })
    );
  }

  deleteClass(id: number) {
    return this.apiService.delete('http://localhost:8083/class/' + id).pipe(
      map(result => {
        console.log('Class deleted id: ' + id);
      })
    );
  }
}
