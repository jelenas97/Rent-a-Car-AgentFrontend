import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private authUrl = 'http://localhost:8080/auth';
  private serverUrl = 'http://localhost:8080';
  private loginUrl = this.authUrl + '/login';
  private signUpUrl = this.authUrl + '/signup';
  passChangeUrl = this.authUrl + '/changePassword';
  whoAmIUrl = this.serverUrl + '/user/whoami';
  private userUrl = this.serverUrl + '/user';
  private adminUrl = this.serverUrl + '/admin';
  private codebookUrl = this.serverUrl + '/codebook';
  private advertisementUrl = this.serverUrl + '/advertisement';
  private commentUrl = this.serverUrl + '/comments';
  private rentRequestUrl = this.serverUrl + '/rentRequest';
  private requestHolderUrl = this.serverUrl + '/requestHolder';
  // tslint:disable-next-line:variable-name
  private _refreshTokenUrl = this.serverUrl + '/refresh';
  agentUrl = this.serverUrl+'/agent';
  private _carUrl= this.serverUrl + '/car';


  get refreshTokenUrl(): string {
    return this._refreshTokenUrl;
  }

  set refreshTokenUrl(value: string) {
    this._refreshTokenUrl = value;
  }

  get login_url(): string {
    return this.loginUrl;
  }

  get signUp_url(): string {
    return this.signUpUrl;
  }

  get whoAmI_url(): string {
    return this.whoAmIUrl;
  }
  get user_url(): string {
    return this.userUrl;
  }
  get server_url(): string {
    return this.serverUrl;
  }
  get passChange_url(): string {
    return this.passChangeUrl;
  }
  get adminPage(): string {
    return this.adminUrl;
  }
  get getCodebook(): string {
    return this.codebookUrl;
  }
  get getAds_url(): string {
    return this.advertisementUrl;
  }
  get getComment_url(): string {
    return this.commentUrl;
  }
  get getRentRequests(): string {
    return this.rentRequestUrl;
  }

  get getRequestHolder_url(): string {
    return this.requestHolderUrl;
  }


  get getCarUrl(): string {
    return this._carUrl;
  }
}
