import {CarClass} from "./car-class";
import {CarBrand} from "./car-brand";
import {TransmissionType} from "./transmission-type";
import {FuelType} from "./fuel-type";

export class Advertisement2 {

  id: Number;
  name : String;
  rate : Number;
  kilometresLimit: Number;
  discount : Number;
  cwd : Boolean;
  image : String;
  mileage : Number;
  kidSeats : Number;
  availableTracking : Boolean;
  carClass : CarClass;
  carBrand : CarBrand;
  transmissionType : TransmissionType;
  fuelType : FuelType;
  price : Number;

  constructor(){}
}
