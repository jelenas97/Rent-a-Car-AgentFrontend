import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agent} from '../../shared/model/agent';
import {Observable} from 'rxjs';
import {Company} from '../../shared/model/company';
import {ConfigService} from '../../service/config.service';

@Injectable()
export class RegisterNewUserService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {

  }

  public registerAgent(agent: Agent): Observable<Agent> {
    return this.httpClient.post<Agent>(this.configService.agentUrl, agent);
  }

  public registerCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.configService.companyUrl, company);
  }


}
