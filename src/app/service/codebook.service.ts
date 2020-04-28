import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CodebookService {
  constructor(private _apiService: ApiService, private _config: ConfigService) {
  }
  getCodeBookInfo() {
    console.log("Code book info");
    return this._apiService.get(this._config.adminPage + "/getCodeBookInfo").pipe(map(result => {
      return result;
    }));
  }
}
