import construct = Reflect.construct;
import {Advertisement} from './advertisement';

export class Rent {
  id: any;
  startDate: Date;
  endDate: Date;
  advertisement: Advertisement;
  constructor(id: any, start: Date, end: Date, ad: Advertisement) {
    this.id = id;
    this.startDate = start;
    this.endDate = end;
    this.advertisement = ad;
  }
}
