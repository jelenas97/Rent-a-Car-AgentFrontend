import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor(private apiService: ApiService) {
  }

  newModel(name: string, brand: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post('http://localhost:8080/model/' + brand , name, editHeaders).pipe(
      map(result => {
        console.log('New model added' + result);

      })
    );
  }

  deleteModel(name: string) {
    return this.apiService.delete('http://localhost:8080/model/' + name).pipe(
      map(result => {
        console.log('Model deleted' + result);
      })
    );
  }
  getModels(brand: string) {
    return this.apiService.get('http://localhost:8080/model/' + brand).pipe(
      map(result => {
        return result;
      })
    );
  }

}
