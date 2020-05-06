import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RentRequestService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  getHistoryRentRequests(id: string){
    return this.apiService.get('http://localhost:8080/rentRequest/history/' + id).pipe(
        map(historyRentRequests => {
            console.log(historyRentRequests);
            return historyRentRequests;
        })
      )
  }

  getRentRequests(id: string){

    return this.apiService.get(this.configService.getRentRequests + '/cancelable/' + id).pipe(
        map(rentRequests => {
            console.log(rentRequests);
            return rentRequests;
        })
      )
  }

}
