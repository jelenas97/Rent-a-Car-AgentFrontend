import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../shared/model/Advertisement';

import { Sort } from '@angular/material/sort';
import { ShopCartComponent } from '../rent-a-car-hp/shop-cart/shop-cart.component'
import { GlobalCart } from '../shared/global'
@Component({
  selector: 'app-rent-a-car-hp',
  templateUrl: './rent-a-car-hp.component.html',
  styleUrls: ['./rent-a-car-hp.component.css']
})
export class RentACarHpComponent implements OnInit {

  all_ads: Advertisement[] = [
    { id: 1, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 4000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1, transmissionType: "automatic", fuelType: "petrol", rate: 1, name: "Car A" },
    { id: 2, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg", mileage: 3000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 3, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car B" },
    { id: 3, kilometresLimit: 200, discount: 10, cwd: true, image: "https://image.made-in-china.com/2f0j00zFJQUkHsbDpb/4-Wheel-Small-Electric-Car-Professional-Design-2-Doors.jpg", mileage: 50000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 2, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 4, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 4, transmissionType: "automatic", fuelType: "petrol", rate: 5, name: "Car A" },
    { id: 5, kilometresLimit: 200, discount: 10, cwd: true, image: "https://www.pvnautoparts.com/image/pvnautoparts/image/cache/data/Car%20Photos/cNBc5ZMb1568434447-256x256.jpg", mileage: 1000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 5, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 6, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 2.5, name: "Car A" },
    { id: 7, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 4.5, name: "Car A" },
    { id: 8, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 9, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 10, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 2, name: "Car A" },
    { id: 11, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 12, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 0, name: "Car A" },
    { id: 13, kilometresLimit: 200, discount: 10, cwd: true, image: "https://pbs.twimg.com/profile_images/739172838100328448/bm6PG0Bv.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 2222222.99, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 14, kilometresLimit: 200, discount: 20, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" },
    { id: 15, kilometresLimit: 200, discount: 40, cwd: true, image: "https://pbs.twimg.com/profile_images/588433651144196096/nCXD0GOf_400x400.jpg", mileage: 20000, kidSeats: 0, availableTracking: true, carClass: "SUV", carBrand: "BMW", price: 1000000, transmissionType: "automatic", fuelType: "petrol", rate: 3, name: "Car A" }
  ];
  advertisements: any;
  startIndex: any;
  numberOfAds: any;
  leftArrow: Boolean;
  rightArrow: Boolean;
  showAdds: Boolean;
  sortedAdvertisements: any;
  count: Number[] = [
    1, 2, 3, 4, 5, 6, 7, 8
  ]
  sortParameter: any;
  isAsc: any;
  arrow: String = "arrow_downward";

  //car search params
  place: any; startDate: Date; endDate: Date; brand : any;

  constructor() { }


  ngOnInit() {

    for (let ad of GlobalCart.cartAds) {
      const foundIndex = this.all_ads.findIndex(({ id }) => id === ad.id);
      this.all_ads = this.all_ads.filter((_, index) => index !== foundIndex);
    }

    this.advertisements = this.all_ads;
    this.sortedAdvertisements = this.all_ads;
    this.sortParameter = "price";
    this.isAsc = false;
    this.showAds();

  }

  showAds() {
    this.sortData(this.sortParameter, this.isAsc);
    this.showAdds = false;
    this.advertisements = [];
    this.numberOfAds = this.all_ads.length;
    this.startIndex = 0;
    this.nextAds();
    this.leftArrow = true;
  }

  nextAds() {
    this.leftArrow = false;
    var left = this.numberOfAds - this.startIndex;
    var num = 0;
    //if there is any left we can click next
    if (left > 10) {
      this.rightArrow = false;
      num = 10;
    } else {
      this.rightArrow = true;
      num = left;
    }
    this.startIndex = this.startIndex + num;
    this.newAds(num);
  }
  newAds(num) {
    this.advertisements = [];
    var start = this.startIndex - num;
    var end = this.startIndex;

    for (start; start < end; start++) {
      this.advertisements.push(this.sortedAdvertisements[start]);
    }
    this.showAdds = true;
  }
  previousAds() {
    this.rightArrow = false;
    this.startIndex = this.startIndex - this.advertisements.length;
    if (this.startIndex == 10) {
      this.leftArrow = true;
    }
    this.newAds(10);
  }

  sortData(tag: any, isAsc: any) {
    this.advertisements = this.all_ads;
    const data = this.advertisements.slice();
    this.sortedAdvertisements = data.sort((a, b) => {
      const isAsc = true;
      return compare(a.price, b.price, isAsc);
    });
    this.sortedAdvertisements = data.sort((a, b) => {
      switch (tag) {

        case 'price': return compare(a.price, b.price, isAsc);
        case 'mileage': return compare(a.mileage, b.mileage, isAsc);
        case 'rate': return compare(a.rate, b.rate, isAsc);
        default: return 0;
      }
    });
  }

  change(value: any) {
    this.sortParameter = value;
    this.showAds();
  }

  changeDirection() {
    if (this.arrow == "arrow_upward") {
      this.arrow = "arrow_downward";
      this.isAsc = false;
    } else {
      this.arrow = "arrow_upward";
      this.isAsc = true;
    }
    this.showAds();
  }

  searchAds() {
    if (this.place == null || this.startDate == null || this.endDate == null)
      console.log("ERROR");
    console.log("Pretrazujem : " + this.place + " start date: " + this.startDate + " end date: " + this.endDate)

  }
  public onNotify(ad: any): void {
    const foundIndex = this.all_ads.findIndex(({ id }) => id === ad.id);
    this.all_ads = this.all_ads.filter((_, index) => index !== foundIndex);
    this.advertisements = this.all_ads;
    this.sortedAdvertisements = this.advertisements;
    this.showAds();
    GlobalCart.cartAds.push(ad);
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
} 