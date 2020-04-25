import {Component, OnInit} from '@angular/core';
import {faCalendar, faLock, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  faUser = faUser;
  faPassword = faLock;
}
