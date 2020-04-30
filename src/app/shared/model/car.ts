import {CarClass} from "./car-class";
import {CarBrand} from "./car-brand";
import {TransmissionType} from "./transmission-type";
import {CarModel} from "./car-model";
import {FuelType} from "./fuel-type";

export class Car{

id: Number;
limit: Number;
image: String;
mileage: Number;
kidSeats: Number;
carClass: CarClass;
carBrand: CarBrand;
transmissionType: TransmissionType;
fuelType: FuelType;
collisionDamageWaiver: Boolean;
imageGallery: any;

constructor(){}


}
