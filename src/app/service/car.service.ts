import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }


  getCar(id: string) {
    return this.apiService.get(this.configService.getCarUrl + '/' + id).pipe(
      map(result => {
        return result;
      })
    );
  }
}
