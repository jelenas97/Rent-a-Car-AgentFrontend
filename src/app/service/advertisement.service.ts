import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Advertisement2} from "../shared/model/advertisement2";
import {AdvertisementMicro} from "../shared/model/advertisement-micro";


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

  addAdvertisement(advertisement: AdvertisementMicro) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getAds_url , advertisement, editHeaders).pipe(map(result => {
      console.log('New advertisement added' + result);    }));
  }

  getAgentAds(id: any) {
    return this.apiService.get(this.configService.getAds_url + '/' + id).pipe(map(result => {
      return result;
    }));
  }
}
