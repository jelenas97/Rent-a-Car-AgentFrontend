import {ConfigService} from './config.service';
import {ApiService} from './api.service';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestHolderService {

  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  getRequestHolders(id: any) {
    console.log('Getting request holders of ' + id);
    return this.apiService.get(this.configService.getRequestHolder_url + '/' + id).pipe(map(result => {
      return result;
      console.log('Request holders: ' + result);
    }));
  }
}
