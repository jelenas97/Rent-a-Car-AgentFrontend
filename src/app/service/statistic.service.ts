import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor(private apiService: ApiService,private configService: ConfigService) {
  }

  getMostKm(id: string){
    return this.apiService.get(this.configService.server_url + '/advertisement/km/user/' + id).pipe(
      map(statisticKm => {
        console.log(statisticKm);
        return statisticKm;
      })
    );
  }

  getMostComments(id: string){
    return this.apiService.get(this.configService.server_url + '/advertisement/comment/user/' + id).pipe(
      map(statisticComments => {
        console.log(statisticComments);
        return statisticComments;
      })
    );
  }

  getBestRate(id: string){
    return this.apiService.get(this.configService.server_url + '/advertisement/rate/user/' + id).pipe(
      map(statisticRate => {
        console.log(statisticRate);
        return statisticRate;
      })
    );
  }
}
