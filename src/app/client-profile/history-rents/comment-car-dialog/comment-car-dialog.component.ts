import { CommentService } from './../../../service/comment.service';
import { ConfigService } from './../../../service/config.service';
import { Comment } from '../../../shared/model/comment';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-comment-car-dialog',
  templateUrl: './comment-car-dialog.component.html',
  styleUrls: ['./comment-car-dialog.component.css']
})
export class CommentCarDialogComponent implements OnInit {


_content: String;
 _date: any;
 _comment: Comment;
_historyRentRequest:any;
_clientId: any;

  constructor(public dialogRef: MatDialogRef<any>,  @Inject(MAT_DIALOG_DATA) public data: any,
   private _calendar: NgbCalendar, private commentService : CommentService, private _notifier: NotifierService) {

      this._date =_calendar.getToday();
   }

  ngOnInit(): void {
    console.log(this.data);
    this._historyRentRequest= this.data._historyRentRequest;
    this._clientId=this.data._clientId;
  }

  addComment(){
    if(this._content!=null){
      this._comment= new Comment();
      this._comment.commenter_id= this._clientId;
      this._comment.content= this._content;
      let date = [this._date['year'],this._date['month'],this._date['day']];
      this._comment.date= date;
      this._comment.advertisement_id=this._historyRentRequest.advertisementId;
      this._comment.rent_request_id=this._historyRentRequest.id;
      console.log(this._comment);

      this.commentService.addComment(this._comment).subscribe(result =>{
        this._notifier.notify('success', 'Succesfully added comment!');
        setTimeout(() => {
        this._notifier.hideAll();
        }, 2000);
      });
      this.dialogRef.close();
    }

  }

}
