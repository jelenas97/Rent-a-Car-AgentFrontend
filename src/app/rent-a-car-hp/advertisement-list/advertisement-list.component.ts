import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Advertisement } from 'src/app/shared/model/Advertisement';



@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

  @Input("advertisements") advertisements : any;
  @Output() notify = new EventEmitter<Advertisement>();
  constructor() { }
  ngOnInit() {
   
  }
  //sortData(sort: Sort) {
    public onNotify(ad:any):void {
    this.notify.emit(ad);
    }

}
