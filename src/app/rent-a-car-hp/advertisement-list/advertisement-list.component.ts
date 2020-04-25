import { Component, OnInit, Input } from '@angular/core';

import { Advertisement } from 'src/app/shared/model/Advertisement';
@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

  @Input("advertisements") advertisements : any;
 
  constructor() { }

  ngOnInit() {
   
  }
  //sortData(sort: Sort) {

 

}
