import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestHolder} from '../../shared/model/request-holder';
import {RequestHolderService} from '../../service/request-holder.service';
import {Rent} from '../../shared/model/rent';
import {RentRequestService} from '../../service/rent-request.service';
import {NotifierService} from "angular-notifier";
import {User} from "../../shared/model/user";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-accept-requests',
  templateUrl: './accept-requests.component.html',
  styleUrls: ['./accept-requests.component.css']
})
export class AcceptRequestsComponent implements OnInit {

  requestHolders: RequestHolder[];
  currUser: User;

  constructor(private holderService: RequestHolderService, private requestService: RentRequestService,
              private notifier: NotifierService, private authService: AuthService) {
    this.currUser = new User();
  }

  @Output() notify = new EventEmitter();
  ngOnInit(): void {
    this.currUser = this.authService.getCurrUser();
    this.holderService.getRequestHolders(this.currUser.id).subscribe(foundHolders => {
      this.requestHolders = foundHolders;
    });
  }

  acceptOne(rent: Rent) {
    this.requestService.processRequest('YES', rent).subscribe(result => {
      console.log(result);
      this.notifier.notify('success', 'Request accepted! :D');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 1000);
      this.onNotify();
    });
  }

  rejectOne(rent: Rent) {
    this.requestService.processRequest('NO', rent).subscribe(result => {
      console.log(result);
      this.notifier.notify('success', 'Request rejected! :(');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 1000);
      this.onNotify();
    });
  }

  acceptAll(holder: RequestHolder) {
    this.requestService.processRequestsBundle('YES', holder).subscribe(result => {
      console.log(result);
      this.notifier.notify('success', 'All requests accepted! :D');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 1000);
      this.onNotify();
    });
  }

  rejectAll(holder: RequestHolder) {
    this.requestService.processRequestsBundle('NO', holder).subscribe(result => {
      console.log(result);
      this.notifier.notify('success', 'All requests rejected! :(');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 1000);
      this.onNotify();
    });
  }

  public onNotify(): void {
    this.notify.emit();
  }

}
