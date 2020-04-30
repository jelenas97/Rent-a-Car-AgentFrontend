import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private apiService: ApiService) {
  }

  newBrand(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post('http://localhost:8080/brand' , name, editHeaders).pipe(
      map(result => {
        console.log('New brand added' + result);

      })
    );
  }

  deleteBrand(name: string) {
    return this.apiService.delete('http://localhost:8080/brand/' + name).pipe(
      map(result => {
        console.log('New brand added' + result);
      })
    );
  }
}
