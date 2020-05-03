import {Component, OnInit} from '@angular/core';
import {GlobalCart} from '../shared/global';
import {Advertisement} from '../shared/model/advertisement';
import {CodebookService} from '../service/codebook.service';
import {ModelService} from '../service/model.service';
import {SearchDto} from '../shared/model/search-dto';
import {AdvertisementService} from '../service/advertisement.service';


@Component({
  selector: 'app-rent-a-car-hp',
  templateUrl: './rent-a-car-hp.component.html',
  styleUrls: ['./rent-a-car-hp.component.css']
})
export class RentACarHpComponent implements OnInit {

  // tslint:disable-next-line:variable-name
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

  codeBook: any;
  advanceSearch: any = false;
  showModel: any = false;
  models: any;

  constructor(private codebookService: CodebookService, private modelService: ModelService,
              private advertisementService: AdvertisementService) { }


  ngOnInit() {
    this.codebookService.getCodeBookInfo().subscribe(codeBook => {
      this.codeBook = codeBook;
      this.advanceSearch = true;

    });


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
    if (this.startIndex === 10) {
      this.leftArrow = true;
    }
    this.newAds(10);
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
    } else {
      this.advertisementService.searchAdvertisements(this.searchDto).subscribe(foundAds => {
        console.log('Founds ads :');
        console.log(foundAds);
        this.all_ads = foundAds;
        this.removeCartAds();
      });
    }
  }
  removeCartAds() {
    for (const ad of GlobalCart.cartAds) {
      const foundIndex = this.all_ads.findIndex(({id}) => id === ad.id);
      this.all_ads = this.all_ads.filter((_, index) => index !== foundIndex);
    }
    this.advertisements = this.all_ads;
    this.sortedAdvertisements = this.all_ads;
    this.sortParameter = 'price';
    this.isAsc = false;
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
    GlobalCart.cartAds.push(ad);
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
