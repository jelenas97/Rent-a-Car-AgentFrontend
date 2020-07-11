import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {ConfigService} from './config.service';
@Injectable({
  providedIn: 'root'
})
export class RateService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  getAverageAdvertisementRate(id: string) {
    return this.apiService.get(this.configService.rateUrl + '/' + id).pipe(
      map(result => {
        return result;
      })
    );
  }

}
