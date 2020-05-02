import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {SearchDto} from '../shared/model/search-dto';
import {ConfigService} from './config.service';
@Injectable({
  providedIn: 'root'
})
export class AdvertisementService{
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }
  searchAdvertisements(searchDto: SearchDto) {
    return this.apiService.get(this.configService.getAds_url, JSON.stringify(searchDto)).pipe(
      map(result => {
        return result;
      })
    );
  }
}
