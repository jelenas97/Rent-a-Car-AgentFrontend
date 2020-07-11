import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';
import {ConfigService} from "./config.service";
@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  newTransmission(name: string) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.transmissionUrl, name, editHeaders).pipe(
      map(result => {
        console.log('New transmission added' + result);

      })
    );
  }

  deleteTransmission(id: number) {
    return this.apiService.delete(this.configService.transmissionUrl + '/' + id).pipe(
      map(result => {
        console.log('Transmission deleted' + result);
      })
    );
  }
}
