import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../shared/model/Advertisement'
@Component({
  selector: 'app-rent-a-car-hp',
  templateUrl: './rent-a-car-hp.component.html',
  styleUrls: ['./rent-a-car-hp.component.css']
})
export class RentACarHpComponent implements OnInit {

  advertisements : Advertisement[] = [
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"},
  {id: 1, kilometresLimit: 200,discount : 10,cwd : true,image : "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg",mileage : 20000,kidSeats : 0,availableTracking : true,carClass : "SUV",carBrand : "BMW",price : 1000000,transmissionType : "automatic",fuelType : "petrol"}
  ]
  constructor() { }
  

  ngOnInit() {
  }

}
