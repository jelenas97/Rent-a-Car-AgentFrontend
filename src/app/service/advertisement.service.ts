import { map } from 'rxjs/operators';
import { Advertisement } from 'src/app/shared/model/Advertisement';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService{

    constructor(private _apiService: ApiService, private _config: ConfigService) {

    }


    rateAdvertisement(rate: any){
       const editHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          });
        return this._apiService.put("" + rate.advertisement_id , rate, editHeaders).pipe(
            map(updateAdv => {
                return updateAdv;
            })
        )
    }

}