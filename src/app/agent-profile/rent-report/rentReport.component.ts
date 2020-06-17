import {Component, OnInit} from '@angular/core';
import {RentReportService} from './rentReport.service';
import {Rent} from '../../shared/model/rent';
import {Term} from "../../shared/model/term";

@Component({
  selector: 'app-rent-report',
  templateUrl: './rentReport.component.html',
  styleUrls: ['./rentReport.component.css']
})

export class RentReportComponent implements OnInit {
  rentedTerms: Term[] = [];

  constructor(private rentReportService: RentReportService) {
  }

  ngOnInit(): void {
    this.rentReportService.getAllRented().subscribe(data => {
      this.rentedTerms = data;
      console.log(data);
    });
  }

}
