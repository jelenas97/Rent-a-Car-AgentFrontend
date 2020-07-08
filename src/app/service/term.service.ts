import {Injectable} from '@angular/core';
import {User} from '../shared/model/user';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {Term} from '../shared/model/term';
import {ApiService} from './api.service';
import {map} from 'rxjs/operators';


@Injectable({ providedIn: 'root'})
export class TermService {

  currUser: User;

  constructor(private httpClient: HttpClient, private configService: ConfigService, private apiService: ApiService) {
    this.currUser = new User();
  }

  getAllTermsWithReport(): Observable<Term[]> {
    return this.apiService.get(this.configService.termUrl + '/withReports' ).pipe(map(result => {
      console.log(result);
      return result;
    }));
  }

}

