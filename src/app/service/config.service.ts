import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private messageUrl = this.serverUrl + '/message';

  private _authUrl = 'http://localhost:8080/auth';

  get authUrl(): string {
    return this._authUrl;
  }

  set authUrl(value: string) {
    this._authUrl = value;
  }

  private signUpUrl = this._authUrl + '/signup';
  passChangeUrl = this._authUrl + '/changePassword';

  private _serverUrl = 'http://localhost:8080';

  get serverUrl(): string {
    return this._serverUrl;
  }

  set serverUrl(value: string) {
    this._serverUrl = value;
  }

  whoAmIUrl = this._serverUrl + '/user/whoami';
  userUrl = this._serverUrl + '/user';
  private adminUrl = this._serverUrl + '/admin';
  private commentUrl = this._serverUrl + '/comment';
  private requestHolderUrl = this._serverUrl + '/requestHolder';
  // tslint:disable-next-line:variable-name
  private _refreshTokenUrl = this._serverUrl + '/refresh';
  private pricelistUrl = this._serverUrl + '/priceList';
  private _carUrl = this._serverUrl + '/car';

  private _loginUrl = this._authUrl + '/login';

  get loginUrl(): string {
    return this._loginUrl;
  }

  set loginUrl(value: string) {
    this._loginUrl = value;
  }

  private _reportUrl = this._serverUrl + '/report';

  get reportUrl(): string {
    return this._reportUrl;
  }

  set reportUrl(value: string) {
    this._reportUrl = value;
  }

  private _codebookUrl = this._serverUrl + '/codebook';

  get codebookUrl(): string {
    return this._codebookUrl;
  }

  set codebookUrl(value: string) {
    this._codebookUrl = value;
  }

  private _advertisementUrl = this._serverUrl + '/advertisement';

  get advertisementUrl(): string {
    return this._advertisementUrl;
  }

  set advertisementUrl(value: string) {
    this._advertisementUrl = value;
  }

  private _termUrl = this._serverUrl + '/term';

  get termUrl(): string {
    return this._termUrl;
  }

  set termUrl(value: string) {
    this._termUrl = value;
  }

  private _rentRequestUrl = this._serverUrl + '/rentRequest';

  get rentRequestUrl(): string {
    return this._rentRequestUrl;
  }

  set rentRequestUrl(value: string) {
    this._rentRequestUrl = value;
  }

  private _agentUrl = this._serverUrl + '/agent';

  get agentUrl(): string {
    return this._agentUrl;
  }

  set agentUrl(value: string) {
    this._agentUrl = value;
  }

  private _rateUrl = this._serverUrl + '/rate';

  get rateUrl(): string {
    return this._rateUrl;
  }

  set rateUrl(value: string) {
    this._rateUrl = value;
  }


  get refreshTokenUrl(): string {
    return this._refreshTokenUrl;
  }

  set refreshTokenUrl(value: string) {
    this._refreshTokenUrl = value;
  }

  get login_url(): string {
    return this._loginUrl;
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
    return this._serverUrl;
  }
  get passChange_url(): string {
    return this.passChangeUrl;
  }
  get adminPage(): string {
    return this.adminUrl;
  }
  get getCodebook(): string {
    return this._codebookUrl;
  }
  get getAds_url(): string {
    return this._advertisementUrl;
  }
  get getComment_url(): string {
    return this.commentUrl;
  }
  get getRentRequests(): string {
    return this._rentRequestUrl;
  }

  get getRequestHolder_url(): string {
    return this.requestHolderUrl;
  }


  get getCarUrl(): string {
    return this._carUrl;
  }

  get getPricelist_url(): string {
    return this.pricelistUrl;
  }

  get getAgent_url(): string {
    return this._agentUrl;
  }

  get getRate_url(): string {
    return this._rateUrl;
  }

  get getMessage_url(): string {
    return this.messageUrl;
  }

}
