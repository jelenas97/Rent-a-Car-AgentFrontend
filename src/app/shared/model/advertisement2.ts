import {Car} from "./car";
import {User} from "./user";
import {Pricelist} from "./pricelist";

export class Advertisement2 {

  id: Number;
  kilometresLimit: Number;
  discount : Number;
  place: String;
  startDate: Date;
  endDate: Date;
  car : Car;
  owner: User;
  priceList: Pricelist;


  constructor(){}
}
