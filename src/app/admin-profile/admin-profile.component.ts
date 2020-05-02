import {Component, OnInit} from '@angular/core';
import {CodeBook} from '../shared/model/codeBook';
import {CodebookService} from '../service/codebook.service';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private codebookService: CodebookService, private userService: UserService) {
  }

  codeBook: CodeBook;
  show = false;
  showUser = false;
  users: any;

  ngOnInit(): void {
  }
  openCodebook() {
    this.codebookService.getCodeBookInfo().subscribe(codeBook => {
      this.codeBook = codeBook;
      this.show = true;
    });
  }
  showUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.showUser = true;
    });
  }
  onNotify() {
    this.show = false;
  }
}
