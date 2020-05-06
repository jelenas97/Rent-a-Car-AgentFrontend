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
   private _calendar: NgbCalendar) {

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
      this._comment.client_id= this._clientId;
      this._comment.content= this._content;
      let date = [this._date['year'],this._date['month'],this._date['day']];
      this._comment.date= date;
      this._comment.advertisement_id=this._historyRentRequest.advertisementId;
      console.log(this._comment);
      this.dialogRef.close();
    }

  }

}
