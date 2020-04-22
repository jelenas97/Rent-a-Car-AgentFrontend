import { Component, OnInit, Input } from '@angular/core';

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

}
