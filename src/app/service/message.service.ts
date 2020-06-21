import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {CarBrand} from "../shared/model/car-brand";
import {HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ConfigService} from "./config.service";
import {Message} from "../shared/model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private apiService: ApiService, private configService: ConfigService) {
  }

  sendMessage(message: Message) {
    const editHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.configService.getMessage_url + '/',message, editHeaders).pipe(
      map(result => {
        console.log('New message added' + result);

      })
    );
  }


  getMessages(rentRequestId: number, userId: number) {
    return this.apiService.get(this.configService.getMessage_url +'/rentRequest/' + rentRequestId + '/user/' + userId).pipe(
      map(result => {
        return result;
      })
    );
  }

}
