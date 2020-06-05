import {CarClass} from "./car-class";
import {CarBrand} from "./car-brand";
import {TransmissionType} from "./transmission-type";
import {CarModel} from "./car-model";
import {FuelType} from "./fuel-type";

export class Car{

id: Number;
mileage: Number;
kidSeats: Number;
carClass: CarClass;
carBrand: CarBrand;
carModel: CarModel
transmissionType: TransmissionType;
fuelType: FuelType[];
availableTracking: Boolean;
imageGallery: any;

constructor(){}


}
