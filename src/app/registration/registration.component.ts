import {Component} from '@angular/core';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {RegistrationService} from './registration.service';
import {User} from '../shared/model/user';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  faUser = faUser;
  faPassword = faLock;
  faMail = faEnvelope;
  user = new User();

  constructor(private registrationService: RegistrationService, private notifier: NotifierService) {
  }

  register() {
    if (this.user.password !== this.user.confirmPassword) {
      this.notifier.notify('error', 'Passwords must match!');
    } else {
      this.registrationService.register(this.user).subscribe();
      this.notifier.notify('success', 'Your sign in request is sent');
    }
  }
}
