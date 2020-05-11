import {Component, OnInit} from '@angular/core';
import {RequestHolder} from '../../shared/model/request-holder';
import {RequestHolderService} from '../../service/request-holder.service';

@Component({
  selector: 'app-accept-requests',
  templateUrl: './accept-requests.component.html',
  styleUrls: ['./accept-requests.component.css']
})
export class AcceptRequestsComponent implements OnInit {

  requestHolders: RequestHolder[];

  constructor(private holderService: RequestHolderService) {
  }

  ngOnInit(): void {
    // id logovanog treba!!!
    this.holderService.getRequestHolders(3).subscribe(foundHolders => {
      this.requestHolders = foundHolders;
    });
  }

}
