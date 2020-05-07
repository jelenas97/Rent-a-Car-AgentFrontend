import construct = Reflect.construct;
import {Advertisement} from './advertisement';

export class Rent {
  id: any;
  startDateTime: any;
  endDateTime: any;
  senderId: any;
  advertisement: Advertisement;
  constructor(id: any, start: Date, end: Date, ad: Advertisement, senderId: any) {
    this.id = id;
    this.startDateTime = start;
    this.endDateTime = end;
    this.advertisement = ad;
    this.senderId = senderId;
  }
}
