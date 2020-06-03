import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  searchAdvertisements(searchDto: any) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getAds_url + '/searchAds', searchDto, header).pipe(
      map(result => {
        return result;
      })
    );
  }

  rateAdvertisement(rate: any) {
    const editHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getRate_url , rate, editHeaders).pipe(
      map(result => {
        return result;
      })
    );
  }

  getAllAdvertisements() {
    return this.apiService.get(this.configService.getAds_url).pipe(map(result => {
      return result;
    }));
  }

  getAgentAds(id: any) {
    return this.apiService.get(this.configService.getAds_url + '/' + id).pipe(map(result => {
      return result;
    }));
  }
}
