import { Pricelist } from './../shared/model/pricelist';
import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable, Output,  EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PricelistService {

  constructor(private apiService: ApiService, private config: ConfigService) {}

  newPricelist(pricelist: Pricelist){
    const editHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      });
      console.log(this.config.getPricelist_url);
      return this.apiService.post(this.config.getPricelist_url ,  pricelist, editHeaders).subscribe(result => {
          console.log('New pricelist: ' + JSON.stringify(result));
        })
  }

  getPricelists(id: String){
    return this.apiService.get(this.config.getPricelist_url + '/creator/' + id).pipe(
      map(pricelists => {
          console.log(pricelists);
          return pricelists;
      })
    );
  }
}