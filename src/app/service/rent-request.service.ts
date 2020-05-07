import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {ConfigService} from './config.service';
import {HttpHeaders} from "@angular/common/http";

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
      );
  }

  getRentRequests(id: string){

    return this.apiService.get(this.configService.getRentRequests + '/cancelable/' + id).pipe(
        map(rentRequests => {
            console.log(rentRequests);
            return rentRequests;
        })
      );
  }
  sentRequest(rent: any) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getRentRequests , rent, editHeaders).pipe(
      map(result => {
        console.log('Request sent:' + result);
      })
    );
  }

}
