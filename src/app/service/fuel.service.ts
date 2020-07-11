import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class FuelService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  newFuel(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.fuelUrl , name, editHeaders).pipe(
      map(result => {
        console.log('New fuel added' + result);

      })
    );
  }

  deleteFuel(id: number) {
    return this.apiService.delete(this.configService.fuelUrl + '/' + id).pipe(
      map(result => {
        console.log('Fuel deleted' + result);
      })
    );
  }
}
