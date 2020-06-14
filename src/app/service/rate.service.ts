import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class RateService{
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  getAverageAdvertisementRate(id : String){
    return this.apiService.get(this.configService.getRate_url+ '/' +id).pipe(
      map(result => {
        return result;
      })
    );
  }

}