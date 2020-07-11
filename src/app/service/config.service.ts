import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get commentUrl(): string {
    return this._commentUrl;
  }

  set commentUrl(value: string) {
    this._commentUrl = value;
  }

  get rateUrl(): string {
    return this._rateUrl;
  }

  set rateUrl(value: string) {
    this._rateUrl = value;
  }
  get fuelUrl(): string {
    return this._fuelUrl;
  }

  set fuelUrl(value: string) {
    this._fuelUrl = value;
  }
  get brandUrl(): string {
    return this._brandUrl;
  }

  set brandUrl(value: string) {
    this._brandUrl = value;
  }

  get modelUrl(): string {
    return this._modelUrl;
  }

  set modelUrl(value: string) {
    this._modelUrl = value;
  }

  get classUrl(): string {
    return this._classUrl;
  }

  set classUrl(value: string) {
    this._classUrl = value;
  }

  get transmissionUrl(): string {
    return this._transmissionUrl;
  }

  set transmissionUrl(value: string) {
    this._transmissionUrl = value;
  }
  get companyUrl(): string {
    return this._companyUrl;
  }

  set companyUrl(value: string) {
    this._companyUrl = value;
  }
  get approveUrl(): string {
    return this._approveUrl;
  }

  set approveUrl(value: string) {
    this._approveUrl = value;
  }

  get rejectUrl(): string {
    return this._rejectUrl;
  }

  set rejectUrl(value: string) {
    this._rejectUrl = value;
  }
  get authUrl(): string {
    return this._authUrl;
  }

  set authUrl(value: string) {
    this._authUrl = value;
  }

  get serverUrl(): string {
    return this._serverUrl;
  }

  set serverUrl(value: string) {
    this._serverUrl = value;
  }

  get loginUrl(): string {
    return this._loginUrl;
  }

  set loginUrl(value: string) {
    this._loginUrl = value;
  }

  get codebookUrl(): string {
    return this._codebookUrl;
  }

  set codebookUrl(value: string) {
    this._codebookUrl = value;
  }

  get advertisementUrl(): string {
    return this._advertisementUrl;
  }

  set advertisementUrl(value: string) {
    this._advertisementUrl = value;
  }

  get rentRequestUrl(): string {
    return this._rentRequestUrl;
  }

  set rentRequestUrl(value: string) {
    this._rentRequestUrl = value;
  }

  get agentUrl(): string {
    return this._agentUrl;
  }

  set agentUrl(value: string) {
    this._agentUrl = value;
  }

  get termUrl(): string {
    return this._termUrl;
  }

  set termUrl(value: string) {
    this._termUrl = value;
  }
  get reportUrl(): string {
    return this._reportUrl;
  }

  set reportUrl(value: string) {
    this._reportUrl = value;
  }

  private _authUrl = 'http://localhost:8083/auth';
  private _serverUrl = 'http://localhost:8083';
  private _loginUrl = this._authUrl + '/login';
  private signUpUrl = this._serverUrl + '/registerRequest';
  private _approveUrl = this.signUpUrl + '/approve';
  private _rejectUrl = this.signUpUrl + '/reject';
  passChangeUrl = this._authUrl + '/changePassword';
  whoAmIUrl = this._serverUrl + '/user/whoami';
  userUrl = this._serverUrl + '/user';
  private adminUrl = this._serverUrl + '/admin';
  private _reportUrl = this._serverUrl + '/report';
  private _codebookUrl = this._serverUrl + '/codebook';
  private _advertisementUrl = this._serverUrl + '/advertisement';
  private _commentUrl = this._serverUrl + '/comment';
  private _termUrl = this._serverUrl + '/term';
  private _rentRequestUrl = this._serverUrl + '/rentRequest';
  private requestHolderUrl = this._serverUrl + '/requestHolder';
  // tslint:disable-next-line:variable-name
  private _refreshTokenUrl = this._serverUrl + '/refresh';
  private _agentUrl = this._serverUrl + '/agent';
  private _companyUrl = this._serverUrl + '/company';
  private pricelistUrl = this._serverUrl+'/priceList';
  private _rateUrl = this._serverUrl + '/rate';
  private _carUrl= this._serverUrl + '/car';
  private _brandUrl = this._serverUrl + '/brand';
  private _modelUrl = this._serverUrl + '/model';
  private _classUrl = this._serverUrl + '/class';
  private _transmissionUrl = this._serverUrl + '/transmission';
  private _fuelUrl = this._serverUrl + '/fuel';
  private messageUrl = this.serverUrl + '/message';


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

  get getMessage_url(): string{
    return this.messageUrl;
  }

}
