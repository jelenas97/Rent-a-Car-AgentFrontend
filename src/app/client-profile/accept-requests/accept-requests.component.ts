import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestHolder} from '../../shared/model/request-holder';
import {RequestHolderService} from '../../service/request-holder.service';
import {Rent} from '../../shared/model/rent';
import {RentRequestService} from '../../service/rent-request.service';

@Component({
  selector: 'app-accept-requests',
  templateUrl: './accept-requests.component.html',
  styleUrls: ['./accept-requests.component.css']
})
export class AcceptRequestsComponent implements OnInit {

  requestHolders: RequestHolder[];

  constructor(private holderService: RequestHolderService, private requestService: RentRequestService) {
  }

  @Output() notify = new EventEmitter();
  ngOnInit(): void {
    // id logovanog treba!!!
    this.holderService.getRequestHolders(3).subscribe(foundHolders => {
      this.requestHolders = foundHolders;
    });
  }

  acceptOne(rent: Rent) {
    this.requestService.processRequest('YES', rent).subscribe(result => {
      console.log(result);
      this.onNotify();
    });
  }

  rejectOne(rent: Rent) {
    this.requestService.processRequest('NO', rent).subscribe(result => {
      console.log(result);
      this.onNotify();
    });
  }

  acceptAll(holder: RequestHolder) {
    this.requestService.processRequestsBundle('YES', holder).subscribe(result => {
      console.log(result);
      this.onNotify();
    });
  }

  rejectAll(holder: RequestHolder) {
    this.requestService.processRequestsBundle('NO', holder).subscribe(result => {
      console.log(result);
      this.onNotify();
    });
  }

  public onNotify(): void {
    this.notify.emit();
  }

}
