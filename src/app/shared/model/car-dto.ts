import {CarClass} from "./car-class";
import {CarBrand} from "./car-brand";
import {CarModel} from "./car-model";
import {TransmissionType} from "./transmission-type";
import {FuelType} from "./fuel-type";

export class CarDto{

  id: Number;
  mileage: Number;
  kidSeats: Number;
  carClass: String;
  carBrand: String;
  carModel: String
  transmissionType: String;
  fuelType: FuelType[];
  availableTracking: Boolean;
  imageGallery: any;
  advertisementId: any;
  ownerId: any;

  constructor(){}


}
