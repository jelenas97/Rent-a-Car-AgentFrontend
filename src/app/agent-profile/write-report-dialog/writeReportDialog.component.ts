import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Report} from '../../shared/model/report';

@Component({
  selector: 'app-write-report-dialog',
  templateUrl: './writeReportDialog.component.html',
  styleUrls: ['./writeReportDialog.component.css']
})
export class WriteReportDialogComponent implements OnInit {

  report: Report;

  constructor(public dialogRef: MatDialogRef<any>) {
    this.report = new Report();
  }

  ngOnInit(): void {

  }

  Cancel(): void {
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  Save() {
    this.dialogRef.close(this.report);
  }

}
