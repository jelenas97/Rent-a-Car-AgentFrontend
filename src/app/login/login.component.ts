import {Component, OnInit} from '@angular/core';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {User} from '../shared/model/user';
import {AppComponent} from '../app.component';
import {UserService} from '../service/user.service';
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  faUser = faUser;
  faPassword = faLock;
  currUser: User;
  user: User;


  constructor(private route: ActivatedRoute,
              private router: Router, private authService: AuthService, private appComponent: AppComponent,
              private notifier: NotifierService) {
    this.currUser = new User();
    this.user = new User();
  }

  onClickedLogin() {

    console.log('Username:' + this.currUser.username + ' and password: ' + this.currUser.password);

    this.authService.getUserByUsername(this.currUser.username).subscribe(data => {
      this.user = data;

      if (this.user.status === 'BLOCKED') {
        this.notifier.notify('error', 'Your account is blocked');
      } else if (this.user.status === 'ACTIVE') {
        this.authService.login(this.currUser).subscribe(data2 => {
            this.currUser = this.authService.getCurrUser();
            this.appComponent.ngOnInit();
            this.router.navigate(['/homepage']);

          },
          error => {
            alert('Incorrect email or password');
          });
      }

    });



  }

  ngOnInit() {
  }
}
