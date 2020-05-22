import {Component, OnInit} from '@angular/core';
import {faLock, faUser} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {User} from '../shared/model/user';
import {AppComponent} from '../app.component';
import {UserService} from '../service/user.service';

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
              private router: Router, private authService: AuthService, private appComponent: AppComponent,
              private userService: UserService) {
    this.currUser = new User();
  }

  onClickedLogin() {
    console.log('Username:' + this.currUser.username + ' and password: ' + this.currUser.password);
    this.authService.login(this.currUser).subscribe(data => {
        console.log(this.userService.getMyInfo().subscribe());
        this.currUser = this.authService.getCurrUser();
        this.userService.getMyInfo().subscribe();
        this.appComponent.ngOnInit();
        this.router.navigate(['/homepage']);

      },
      error => {
        alert('Incorrect email or password');
      });
  }

  ngOnInit() {
  }
}
