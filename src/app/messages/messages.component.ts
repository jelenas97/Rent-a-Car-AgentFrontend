import { Component, OnInit } from '@angular/core';
import {User} from "../shared/model/user";
import {RentRequest} from "../shared/model/rent-request";
import {Message} from "../shared/model/message";
import {NotifierService} from "angular-notifier";
import {RentRequestService} from "../service/rent-request.service";
import {AuthService} from "../service/auth.service";
import {MessageService} from "../service/message.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  currUser : User;
  rentRequests: RentRequest[];
  messages: Message[];
  newMessage: Message = new Message();
  currRentRequestId: number;

  constructor(private notifier: NotifierService, private _dialog: MatDialog, private _rentRequestService : RentRequestService, private authService: AuthService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.currUser=this.authService.getCurrUser();
    this._rentRequestService.getRentRequestsReserved(this.currUser.id).subscribe(rentRequests=>{
      console.log(rentRequests);
      this.rentRequests=rentRequests;
    });
  }

  isMyRequest(id: number) {
    if(this.currUser.id == id)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  getMessages(id) {
    this.currRentRequestId = id;
    this.messageService.getMessages(id, this.currUser.id).subscribe(messages=> {
      console.log(messages);
      this.messages = messages;
    });

  }

  sender(message: Message) {
    if(message.senderId == this.currUser.id)
    {
      return true;
    }else {
      return false;
    }
  }

  sendMessage() {
    this.newMessage.senderId = this.currUser.id;
    this.newMessage.senderUsername = this.currUser.username;
    this.newMessage.rentRequestId = this.currRentRequestId;
    this.messageService.sendMessage(this.newMessage).subscribe(message => {
        this.newMessage = new Message();
        this.messageService.getMessages(this.currRentRequestId, this.currUser.id).subscribe(messages=> {
          console.log(messages);
          this.messages = messages;
        });
        this.notifier.notify("success","Message has been send!");
        setTimeout(() => {
          this.notifier.hideAll();
        }, 2000);
      },
      error => {
        this.newMessage = new Message();
        this.notifier.notify("error", error.error);
      });

  }
}
