import {CarClass} from "./car-class";
import {CarBrand} from "./car-brand";
import {TransmissionType} from "./transmission-type";
import {FuelType} from "./fuel-type";
import {CarModel} from "./car-model";
import {Car} from "./car";

export class Advertisement2 {

  id: Number;
  kilometresLimit: Number;
  cdw: Boolean;
  discount : Number;
  place: String;
  startDate: Date;
  endDate: Date;
  car : Car;


  constructor(){}
}
