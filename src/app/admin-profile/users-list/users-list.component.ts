import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/model/user';
import {ConfirmDialogComponent} from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../service/user.service';
import {CodeBook} from "../../shared/model/codeBook";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private dialog: MatDialog, private userService: UserService) { }
  @Input('users') users: User[];
  ngOnInit(): void {
  }
  changeStatus(user: User) {


    console.log(user);
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data : 'User',
    });
    dialog.afterClosed().subscribe(result => {
      console.log('Before :' + user.status);
      const x = (document.getElementById(user.id) as HTMLSelectElement);
      if (result === 'no') {
        x.value = user.status;
      } else {
        user.status = x.value;
        this.userService.changeStatus(user).subscribe(res => {
          console.log(res);
        });
      }

      console.log('After :' + user.status);    });
  }

}
