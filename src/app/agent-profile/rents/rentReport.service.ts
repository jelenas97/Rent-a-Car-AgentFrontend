import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../../service/config.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../shared/model/user';
import {Term} from '../../shared/model/term';
import {Report} from '../../shared/model/report';
import {Advertisement} from '../../shared/model/advertisement';

@Injectable()
export class RentReportService {

  currUser: User;

  constructor(private httpClient: HttpClient, private configService: ConfigService, private authService: AuthService) {
    this.currUser = new User();
  }

  public getAllRented(): Observable<Term[]> {
    this.currUser = this.authService.getCurrUser();
    return this.httpClient.get<Term[]>(this.configService.termUrl + '/agent/' + this.currUser.id );
  }

  public getAll(): Observable<Report[]> {
    return this.httpClient.get<Report[]>(this.configService.reportUrl );
  }

  save(result: Report, term: Term) {
    result.term = term;
    result.advertisement = new Advertisement();
    result.advertisement = term.advertisement;
    return this.httpClient.post<Report>(this.configService.reportUrl, result);
  }
}
