import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../../service/config.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../shared/model/user';
import {Rent} from '../../shared/model/rent';

@Injectable()
export class RentReportService {

  currUser: User;

  constructor(private httpClient: HttpClient, private configService: ConfigService, private authService: AuthService) {
    this.currUser = new User();
  }

  public getAllRented(): Observable<Rent[]> {
    this.currUser = this.authService.getCurrUser();
    return this.httpClient.get<Rent[]>(this.configService.getAgent_url + '/' + this.currUser.id + '/terms');
  }

}
