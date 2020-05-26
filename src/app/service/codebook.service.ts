import { ConfigService } from './config.service';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CodebookService {
  constructor(private apiService: ApiService, private config: ConfigService) {
  }
  getCodeBookInfo() {
    return this.apiService.get(this.config.getCodebook + '/getCodeBookInfo').pipe(map(result => {
      return result;
    }));
  }
}
