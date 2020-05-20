import {Component, OnInit} from '@angular/core';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {User} from '../shared/model/user';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  faUser = faUser;
  faPassword = faLock;
  currUser: User;


  constructor(private route: ActivatedRoute,
              private router: Router, private authService: AuthService, private appComponent: AppComponent) {
    this.currUser = new User();
  }

  onClickedLogin() {
    console.log('Username:' + this.currUser.username + ' and password: ' + this.currUser.password);
    this.authService.login(this.currUser).subscribe(data => {
        this.router.navigate(['/homepage']);
        console.log(this.authService.getCurrUser());
        this.currUser = this.authService.getCurrUser();
        this.appComponent.ngOnInit();
      },
      error => {
        alert('Incorrect email or password');
      });
  }

  ngOnInit() {
  }
}
