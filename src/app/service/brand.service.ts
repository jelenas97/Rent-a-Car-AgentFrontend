import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  newBrand(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.brandUrl , name, editHeaders).pipe(
      map(result => {
        console.log('New brand added' + result);

      })
    );
  }

  deleteBrand(id: number) {
    return this.apiService.delete(this.configService.brandUrl + '/' + id).pipe(
      map(result => {
        console.log('New brand added' + result);
      })
    );
  }
}
