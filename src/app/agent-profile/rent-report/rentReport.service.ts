import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../../service/config.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../shared/model/user';
import {Term} from '../../shared/model/term';

@Injectable()
export class RentReportService {

  currUser: User;

  constructor(private httpClient: HttpClient, private configService: ConfigService, private authService: AuthService) {
    this.currUser = new User();
  }

  public getAllRented(): Observable<Term[]> {
    this.currUser = this.authService.getCurrUser();
    console.log(this.currUser);
    return this.httpClient.get<Term[]>(this.configService.agentUrl + '/' + this.currUser.id + '/terms');
  }

}
