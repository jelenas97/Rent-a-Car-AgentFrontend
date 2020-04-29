import {Component} from '@angular/core';
import {faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  faUser = faUser;
  faPassword = faLock;
  faMail = faEnvelope;
}
