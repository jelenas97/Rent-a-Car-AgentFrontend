import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/model/user';
import {RegistrationService} from '../../registration/registration.service';
import {RegisterRequest} from "../../shared/model/registerRequest";

@Component({
  selector: 'app-register-request',
  templateUrl: './registerRequest.component.html',
  styleUrls: ['./registerRequest.component.css']
})
export class RegisterRequestComponent implements OnInit {

  @Input('registerRequests') registerRequests: RegisterRequest[];

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit(): void {
    this.registrationService.getRegisterRequests().subscribe(requests => {
      this.registerRequests = requests;
    });
  }

  approveRequest(registerRequest: RegisterRequest) {
    this.registrationService.approveRequest(registerRequest).subscribe(result => this.ngOnInit());
  }

  rejectRequest(registerRequest: RegisterRequest) {
    this.registrationService.rejectRequest(registerRequest).subscribe(result => this.ngOnInit());
  }
}
