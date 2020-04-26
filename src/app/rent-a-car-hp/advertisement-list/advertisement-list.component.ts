import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advertisement} from '../../shared/model/advertisement';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

  @Input('advertisements') advertisements: any;
  @Output() notify = new EventEmitter<Advertisement>();

  constructor() {
  }

  all_ads: Advertisement[] = [
    {
      id: 1,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 4000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 1,
      name: 'Car A'
    },
    {
      id: 2,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg',
      mileage: 3000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 3,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car B'
    },
    {
      id: 3,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://image.made-in-china.com/2f0j00zFJQUkHsbDpb/4-Wheel-Small-Electric-Car-Professional-Design-2-Doors.jpg',
      mileage: 50000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 2,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 4,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 4,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 5,
      name: 'Car A'
    },
    {
      id: 5,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://www.pvnautoparts.com/image/pvnautoparts/image/cache/data/Car%20Photos/cNBc5ZMb1568434447-256x256.jpg',
      mileage: 1000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 5,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 6,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 2.5,
      name: 'Car A'
    },
    {
      id: 7,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 4.5,
      name: 'Car A'
    },
    {
      id: 8,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 9,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 10,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 2,
      name: 'Car A'
    },
    {
      id: 11,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 12,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 0,
      name: 'Car A'
    },
    {
      id: 13,
      kilometresLimit: 200,
      discount: 10,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 2222222.99,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 14,
      kilometresLimit: 200,
      discount: 20,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    },
    {
      id: 15,
      kilometresLimit: 200,
      discount: 40,
      cwd: true,
      image: 'https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg',
      mileage: 20000,
      kidSeats: 0,
      availableTracking: true,
      carClass: 'SUV',
      carBrand: 'BMW',
      price: 1000000,
      transmissionType: 'automatic',
      fuelType: 'petrol',
      rate: 3,
      name: 'Car A'
    }
  ];

  ngOnInit() {

  }

  // sortData(sort: Sort) {
  public onNotify(ad: any): void {
    // this.all_ads.some(e => e.discount === 40);
    // console.log(ad);
    // const foundIndex = this.advertisements.findIndex(({ id }) => id === ad.id);
    // console.log(foundIndex);
    // this.advertisements = this.advertisements.filter((_, index) => index !== foundIndex);
    // console.log(this.advertisements);

    this.notify.emit(ad);
  }

}
