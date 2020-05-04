import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../shared/model/comment';
import {User} from '../../shared/model/user';
import {ConfirmDialogComponent} from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-approving-comments',
  templateUrl: './approving-comments.component.html',
  styleUrls: ['./approving-comments.component.css']
})
export class ApprovingCommentsComponent implements OnInit {

  constructor(private dialog: MatDialog, private commentService: CommentService) { }
  @Input('comments') comments: Comment[];
  ngOnInit(): void {
  }

  changeStatus(comment: Comment) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'User',
    });
    dialog.afterClosed().subscribe(result => {
      const x = (document.getElementById(comment.id) as HTMLSelectElement);
      if (result === 'no') {
        x.value = comment.status;
      } else {
        comment.status = x.value;
        this.commentService.changeStatus(comment).subscribe(res => {
          console.log(res);
        });
      }
    });
  }
}
