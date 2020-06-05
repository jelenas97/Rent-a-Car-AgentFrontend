import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  constructor(private apiService: ApiService) {
  }

  newTransmission(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post('http://localhost:8083/transmission' , name, editHeaders).pipe(
      map(result => {
        console.log('New transmission added' + result);

      })
    );
  }

  deleteTransmission(name: string) {
    return this.apiService.delete('http://localhost:8083/transmission/' + name).pipe(
      map(result => {
        console.log('Transmission deleted' + result);
      })
    );
  }
}
