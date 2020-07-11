import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {CarBrand} from '../shared/model/car-brand';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class ModelService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  newModel(name: string, brand: CarBrand) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post( this.configService.modelUrl + '/' + brand.id , name, editHeaders).pipe(
      map(result => {
        console.log('New model added' + result);

      })
    );
  }

  deleteModel(id: number) {
    return this.apiService.delete(this.configService.modelUrl + '/' + id).pipe(
      map(result => {
        console.log('Model deleted' + result);
      })
    );
  }
  getModels(brand: number) {
    return this.apiService.get(this.configService.modelUrl + '/' + brand).pipe(
      map(result => {
        return result;
      })
    );
  }

}
