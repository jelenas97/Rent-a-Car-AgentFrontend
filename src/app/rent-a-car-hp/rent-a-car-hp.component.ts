import {Component, OnInit} from '@angular/core';
import {GlobalCart} from '../shared/global';
import {Advertisement} from '../shared/model/advertisement';
import {CodebookService} from '../service/codebook.service';
import {ModelService} from '../service/model.service';
import {SearchDto} from '../shared/model/search-dto';
import {AdvertisementService} from '../service/advertisement.service';
import {Rent} from '../shared/model/rent';
import {NotifierService} from 'angular-notifier';
import {AuthService} from '../service/auth.service';
import {User} from '../shared/model/user';

@Component({
  selector: 'app-rent-a-car-hp',
  templateUrl: './rent-a-car-hp.component.html',
  styleUrls: ['./rent-a-car-hp.component.css']
})
export class RentACarHpComponent implements OnInit {

  all_ads: Advertisement[];
  advertisements: any;
  startIndex: any;
  numberOfAds: any;
  leftArrow: any;
  rightArrow: any;
  showAdds: any;
  sortedAdvertisements: any;
  sortParameter: any;
  isAsc: any;
  arrow: any = 'arrow_downward';
  // car search params
  searchDto: SearchDto = new SearchDto();
  showPlaceholder = true;
  codeBook: any;
  advanceSearch: any = false;
  showModel: any = false;
  models: any;
  opened: any = true;
  numOfAds: any = 6;
  currUser: User;
  constructor(private codebookService: CodebookService, private modelService: ModelService,
              private advertisementService: AdvertisementService, private notifier: NotifierService,
              private authService: AuthService) {
  }


  ngOnInit() {
    this.codebookService.getCodeBookInfo().subscribe(codeBook => {
      this.codeBook = codeBook;
      this.advanceSearch = true;

    });
    this.currUser = this.authService.getCurrUser();
    let unregistered = true;
    if (this.currUser.roles !== undefined) {
      if (this.currUser.roles !== null) {
        if (this.currUser.roles.includes('ROLE_AGENT')) {
          this.advertisementService.getAgentAds(this.currUser.id).subscribe(foundAds => {
            this.all_ads = foundAds;
            unregistered = false;
            this.removeCartAds();
          });
        }
      }
    }
    if (unregistered) {
      this.advertisementService.getAllAdvertisements().subscribe(foundAds => {
        this.all_ads = foundAds;
        this.removeCartAds();
      });
    }
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
    const left = this.numberOfAds - this.startIndex;
    let num = 0;
    // if there is any left we can click next
    if (left > this.numOfAds) {
      this.rightArrow = false;
      num = this.numOfAds;
    } else {
      this.rightArrow = true;
      num = left;
    }
    this.startIndex = this.startIndex + num;
    this.newAds(num);
  }

  newAds(num) {
    this.advertisements = [];
    let start = this.startIndex - num;
    const end = this.startIndex;

    for (start; start < end; start++) {
      this.advertisements.push(this.sortedAdvertisements[start]);
    }
    this.showAdds = true;
  }

  previousAds() {
    this.rightArrow = false;
    this.startIndex = this.startIndex - this.advertisements.length;
    if (this.startIndex === this.numOfAds) {
      this.leftArrow = true;
    }
    this.newAds(this.numOfAds);
  }

  sortData(tag: any, isAsc: any) {
    this.advertisements = this.all_ads;
    const data = this.advertisements.slice();
    this.sortedAdvertisements = data.sort((a, b) => {
      const asc = true;
      return compare(a.price, b.price, asc);
    });
    this.sortedAdvertisements = data.sort((a, b) => {
      switch (tag) {

        case 'price':
          return compare(a.price, b.price, isAsc);
        case 'mileage':
          return compare(a.mileage, b.mileage, isAsc);
        case 'rate':
          return compare(a.rate, b.rate, isAsc);
        default:
          return 0;
      }
    });
  }

  change(value: any) {
    this.sortParameter = value;
    this.showAds();
  }

  changeDirection() {
    if (this.arrow === 'arrow_upward') {
      this.arrow = 'arrow_downward';
      this.isAsc = false;
    } else {
      this.arrow = 'arrow_upward';
      this.isAsc = true;
    }
    this.showAds();
  }

  searchAds() {
    console.log('Search DTO: ' + JSON.stringify(this.searchDto));
    if (this.searchDto.place == null || this.searchDto.startDate == null || this.searchDto.endDate == null) {
      console.log('ERROR');

      this.notifier.notify('error', 'You have to insert Start date, End date and Place !!!');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 2000);

    } else {
      this.advertisementService.searchAdvertisements(this.searchDto).subscribe(foundAds => {
        this.all_ads = foundAds;
        this.removeCartAds();
        this.notifier.notify('success', 'Searching finished :D');
        setTimeout(() => {
          this.notifier.hideAll();
        }, 1000);
      });
    }
  }
  removeCartAds() {
    for (const ad of GlobalCart.cartAds) {
      const foundIndex = this.all_ads.findIndex(({id}) => id === ad.advertisementId);
      this.all_ads = this.all_ads.filter((_, index) => index !== foundIndex);
    }
    this.advertisements = this.all_ads;
    this.sortedAdvertisements = this.all_ads;
    this.sortParameter = 'price';
    this.isAsc = false;
    if (this.all_ads.length === 0) {
      this.notifier.notify('error', 'We could not find any free car :(, try with other parameters!');
      setTimeout(() => {
        this.notifier.hideAll();
      }, 1000);
    }
    this.showAds();
  }

  showModels(brand: any) {
    this.showModel = false;
    this.modelService.getModels(brand).subscribe(models => {
      this.models = models;
      this.showModel = true;
    });
  }

  public onNotify(ad: any): void {
    const foundIndex = this.all_ads.findIndex(({id}) => id === ad.id);
    this.all_ads = this.all_ads.filter((_, index) => index !== foundIndex);
    this.advertisements = this.all_ads;
    this.sortedAdvertisements = this.advertisements;
    this.showAds();
    const senderId = 8;
    // TREBA NAM ID OD ONOGA KOJI POSALJE!!!!!!!!!!!!!
    // if(nije ulogovan){
    //   this.notifier.notify('error', 'You have to log  in to rent a car!');
    //   setTimeout(() => {
    //     this.notifier.hideAll();
    //   }, 2000);
    // }
    // if (this.searchDto.place == null || this.searchDto.startDate == null || this.searchDto.endDate == null) {
    // }
    const request = new Rent(ad.id, this.searchDto.startDate, this.searchDto.endDate, ad, senderId);
    GlobalCart.cartAds.push(request);
    this.notifier.notify('success', 'Car added in shop cart!');
    setTimeout(() => {
      this.notifier.hideAll();
    }, 1000);
  }
  public changeNumAd() {
  }

  changeOption() {
    this.showPlaceholder = false;
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
