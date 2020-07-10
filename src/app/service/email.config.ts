import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailConfig {
  private serverUrl = 'https://message-rmq.herokuapp.com';
  private sendEmail = this.serverUrl + '/send';

  private rentRequestSentMessage = 'Dear user, <br> <br> Your request for renting is sent! <br> Thanks you for choosing our application, our team will contact you as soon as owner answers.' +
    '<br> If you have any questions, please let us know. <br> <br> Drive safe! <br> Rent-a-car team';

  get sendEmailUrl(): string {
    return this.sendEmail;
  }

  get getRentRequestSendMessage(): string {
    return this.rentRequestSentMessage;
  }


}
