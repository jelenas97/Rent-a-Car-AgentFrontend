import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agent} from '../../shared/model/agent';
import {Observable} from 'rxjs';
import {Company} from '../../shared/model/company';

@Injectable()
export class RegisterNewUserService {
  private readonly registerAgentUrl: string;
  private readonly registerCompanyUrl: string;

  constructor(private httpClient: HttpClient) {
    this.registerAgentUrl = 'http://localhost:8080/agent/save';
    this.registerCompanyUrl = 'http://localhost:8080/company/save';
  }

  public registerAgent(agent: Agent): Observable<Agent> {
    return this.httpClient.post<Agent>(this.registerAgentUrl, agent);
  }

  public registerCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.registerCompanyUrl, company);
  }


}
