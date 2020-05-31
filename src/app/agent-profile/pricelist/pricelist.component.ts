import { NotifierService } from 'angular-notifier';
import { User } from './../../shared/model/user';
import { AuthService } from './../../service/auth.service';
import { PricelistService } from './../../service/pricelist.service';
import { Pricelist } from './../../shared/model/pricelist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.css']
})
export class PricelistComponent implements OnInit {

  currUser: User;
  pricelist: Pricelist = new Pricelist();
  _pricelists: Pricelist[];
  showCdw:boolean;
  constructor(private pricelistService: PricelistService, private authService: AuthService,  private notifier: NotifierService) { }

  ngOnInit(): void {
    this.currUser= this.authService.getCurrUser();
    this.getPricelists( this.authService.getCurrUser().id);
  }

  addNewPricelist(){
    this.pricelist.creatorId=this.currUser.id;
    this.pricelistService.newPricelist(this.pricelist);
    this.pricelistService.getPricelists(this.currUser.id).subscribe(pricelists=> {
      this._pricelists=pricelists;
    })
    console.log(this._pricelists);
    this.notifier.notify('success', 'New pricelist succesfully created');
          setTimeout(() => {
            this.notifier.hideAll();
          }, 2000);
  }

  getPricelists(id: String){
    this.pricelistService.getPricelists(id).subscribe(pricelists=> {
      this._pricelists=pricelists;
    })
  }

 FieldsChange(values:any){
  console.log(values.currentTarget.checked);
  this.showCdw=values.currentTarget.checked;
  }
}
