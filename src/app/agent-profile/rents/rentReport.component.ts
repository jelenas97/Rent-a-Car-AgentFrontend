import {Component, OnInit} from '@angular/core';
import {RentReportService} from './rentReport.service';
import {Term} from '../../shared/model/term';
import {MatDialog} from '@angular/material/dialog';
import {WriteReportDialogComponent} from '../write-report-dialog/writeReportDialog.component';
import {TermService} from '../../service/term.service';

@Component({
  selector: 'app-rents',
  templateUrl: './rentReport.component.html',
  styleUrls: ['./rentReport.component.css']
})

export class RentReportComponent implements OnInit {
  datum: number;
  termsWithReports: Term[] = [];
  rentedTerms: Term[] = [];
  termIds: any[] = [];

  constructor(private rentReportService: RentReportService, private dialog: MatDialog,
              private termService: TermService) {
  }

  ngOnInit(): void {
    this.rentReportService.getAllRented().subscribe(data => {
      this.rentedTerms = data;
      this.termService.getAllTermsWithReport().subscribe(data1 => {
        this.termsWithReports = data1;
        this.showReportButton();
      });
    });
  }

  showReportButton() {

    for (const termWithReport of this.termsWithReports) {
      this.termIds.push(termWithReport.id);
    }

    console.log(this.termIds);
    for (const term of this.rentedTerms) {

      console.log(this.termIds.indexOf(term.id));
      this.datum = Date.parse(term.endDate.toString());
      if (this.datum < Date.now() && this.termIds.indexOf(term.id) === -1) {
        term.writeReport = true;
      } else {
        term.writeReport = false;
      }
    }
  }

  writeReport(term: Term) {
    const dialog = this.dialog.open(WriteReportDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.rentReportService.save(result, term).subscribe(message => {

        });
      }
    });
  }
}
