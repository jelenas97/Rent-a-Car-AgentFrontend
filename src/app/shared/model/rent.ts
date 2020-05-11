import {Advertisement} from './advertisement';

export class Rent {
  advertisementId: any;
  startDateTime: any;
  endDateTime: any;
  senderId: any;
  startDateString: any;
  endDateString: any;
  advertisement: Advertisement;
  cars: any;
  constructor(advertisementId: any, start: Date, end: Date, ad: Advertisement, senderId: any) {
    this.advertisementId = advertisementId;
    this.startDateTime = start;
    this.endDateTime = end;
    this.advertisement = ad;
    this.senderId = senderId;
    this.cars = this.advertisement.name;
  }
}
