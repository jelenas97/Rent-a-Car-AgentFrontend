import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/model/user';
import {ConfigService} from '../service/config.service';
import {RegisterRequest} from "../shared/model/registerRequest";

@Injectable()
export class RegistrationService {

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  public register(user: User) {
    return this.httpClient.post<User>(this.configService.signUp_url, user);
  }

  public getRegisterRequests() {
    return this.httpClient.get<User[]>(this.configService.signUp_url);
  }

  public approveRequest(registerRequest: RegisterRequest) {
    return this.httpClient.post<RegisterRequest>(this.configService.approveUrl, registerRequest);
  }

  rejectRequest(registerRequest: RegisterRequest) {
    return this.httpClient.post<RegisterRequest>(this.configService.rejectUrl, registerRequest);
  }
}
