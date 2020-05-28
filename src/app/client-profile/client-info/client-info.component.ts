import { UserService } from './../../service/user.service';
import { AuthService } from './../../service/auth.service';
import { User } from './../../shared/model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  currUser: User;
  userInfo: any;

  constructor(private authService: AuthService, private userService : UserService) { }

  ngOnInit(): void {
    this.currUser = this.authService.getCurrUser();
    console.log(this.currUser);

  }
}
