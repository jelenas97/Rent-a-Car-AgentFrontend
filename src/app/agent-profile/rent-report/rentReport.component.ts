import {Component, OnInit} from '@angular/core';
import {RentReportService} from './rentReport.service';
import {Rent} from '../../shared/model/rent';

@Component({
  selector: 'app-rent-report',
  templateUrl: './rentReport.component.html',
  styleUrls: ['./rentReport.component.css']
})

export class RentReportComponent implements OnInit {
  rented: Rent[] = [];

  constructor(private rentReportService: RentReportService) {
  }

  ngOnInit(): void {
    this.rentReportService.getAllRented().subscribe(data => {
      this.rented = data;
    });
    console.log(this.rented);
  }

}
