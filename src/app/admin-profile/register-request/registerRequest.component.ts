import {Component, Input, OnInit} from '@angular/core';
import {RegistrationService} from '../../registration/registration.service';
import {RegisterRequest} from '../../shared/model/registerRequest';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-register-request',
  templateUrl: './registerRequest.component.html',
  styleUrls: ['./registerRequest.component.css']
})
export class RegisterRequestComponent implements OnInit {

  @Input('registerRequests') registerRequests: RegisterRequest[];

  constructor(private registrationService: RegistrationService, private notifier: NotifierService) {
  }

  ngOnInit(): void {
    this.registrationService.getRegisterRequests().subscribe(requests => {
      this.registerRequests = requests;
    });
  }

  approveRequest(registerRequest: RegisterRequest) {
    this.registrationService.approveRequest(registerRequest).subscribe(result => this.ngOnInit());
    this.notifier.notify('success', 'Successfully approved sign in request');
  }

  rejectRequest(registerRequest: RegisterRequest) {
    this.registrationService.rejectRequest(registerRequest).subscribe(result => this.ngOnInit());
    this.notifier.notify('success', 'Successfully rejected sign in request');
  }
}
