import {Car} from "./car";
import {User} from "./user";
import {Pricelist} from "./pricelist";

export class AdvertisementMicro {

  id: Number;
  kilometresLimit: Number;
  discount : Number;
  place: String;
  startDate: Date;
  endDate: Date;
  car : Car;
  ownerId: Number;
  priceList: Pricelist;


  constructor(){}
}
