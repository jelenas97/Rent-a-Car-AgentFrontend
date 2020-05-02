import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FuelService {
  constructor(private apiService: ApiService) {
  }

  newFuel(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post('http://localhost:8080/fuel' , name, editHeaders).pipe(
      map(result => {
        console.log('New fuel added' + result);

      })
    );
  }

  deleteFuel(name: string) {
    return this.apiService.delete('http://localhost:8080/fuel/' + name).pipe(
      map(result => {
        console.log('Fuel deleted' + result);
      })
    );
  }
}