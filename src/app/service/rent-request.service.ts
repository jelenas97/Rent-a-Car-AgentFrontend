import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {HttpHeaders} from "@angular/common/http";
import {Rent} from "../shared/model/rent";
import {RequestHolder} from "../shared/model/request-holder";

@Injectable({
  providedIn: 'root'
})
export class RentRequestService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  getHistoryRentRequests(id: string){
    return this.apiService.get(this.configService.getRentRequests + '/history/' + id).pipe(
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

  getPaidRentRequests(id: string){

    return this.apiService.get(this.configService.getRentRequests + '/paid/' + id).pipe(
        map(rentRequests => {
            console.log(rentRequests);
            return rentRequests;
        })
      );
  }

  getRentRequestsReserved(id: string){
    return this.apiService.get(this.configService.getRentRequests + '/user/' + id + '/reserved').pipe(
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

  processRequest(confirm: any, rent: Rent) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getRentRequests + '/request/' + confirm, rent, editHeaders).pipe(
      map(result => {
        console.log('Request process:' + result);
      })
    );
  }

  processRequestsBundle(confirm: any, requestHolder: RequestHolder) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getRentRequests + '/bundle/' + confirm, requestHolder, editHeaders).pipe(
      map(result => {
        console.log('Request process:' + result);
      })
    );
  }

  physicalRent(rent: Rent) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getRentRequests + '/physicalRent', rent, editHeaders).pipe(
      map(result => {
        console.log('Physical rent:' + result);
      })
    );
  }

  cancelRentRequest(id: String){
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.configService.getRentRequests + '/cancel/'+ id , editHeaders).pipe(
      map(updateAdv => {
        return updateAdv;
      })
    );
  }

  payRentRequest(id: String){
    const editHeaders = new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.put(this.configService.getRentRequests + '/pay/'+ id , editHeaders).pipe(
      map(updateAdv => {
        console.log(updateAdv);
        return updateAdv;
      })
    );
  }

}
