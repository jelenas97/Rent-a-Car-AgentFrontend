import {Component, OnInit} from '@angular/core';
import {CodeBook} from '../shared/model/codeBook';
import {CodebookService} from '../service/codebook.service';
import {UserService} from '../service/user.service';
import {CommentService} from '../service/comment.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private codebookService: CodebookService, private userService: UserService,
              private commentService: CommentService) {
  }

  codeBook: CodeBook;
  show = false;
  showUser = false;
  showCom = false;
  users: any;
  comments: any;

  ngOnInit(): void {
  }
  openCodebook() {
    this.codebookService.getCodeBookInfo().subscribe(codeBook => {
      this.codeBook = codeBook;
      this.hideAll();
      this.show = true;
    });
  }
  showUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.hideAll();
      this.showUser = true;
    });
  }
  showComments() {
    this.commentService.getUnComments().subscribe(comments => {
      this.comments = comments;
      console.log(this.comments);
      this.hideAll();
      this.showCom = true;
    });
  }
  hideAll() {
    this.show = false;
    this.showUser = false;
    this.showCom = false;
  }
  onNotify() {
    this.show = false;
  }
}
