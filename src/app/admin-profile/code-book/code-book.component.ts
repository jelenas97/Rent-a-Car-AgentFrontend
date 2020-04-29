import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeBook} from 'src/app/shared/model/codeBook';
import {MatDialog} from '@angular/material/dialog';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';
import {BrandService} from '../../service/brand.service';
import {ConfirmDialogComponent} from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import {ClassService} from '../../service/class.service';
import {FuelService} from '../../service/fuel.service';
import {ModelService} from '../../service/model.service';
import {TransmissionService} from "../../service/transmission.service";

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {
  @Input('codeBook') codeBook: CodeBook;
  @Output() notify = new EventEmitter();

  constructor(private dialog: MatDialog, private brandService: BrandService, private classService: ClassService,
              private fuelService: FuelService, private modelService: ModelService, private tranService: TransmissionService) {
  }

  ngOnInit(): void {
  }

  addNewBrand() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      this.brandService.newBrand(result).subscribe(message => {
      });
      this.onNotify();
    });
  }
  removeBrand(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.brandService.deleteBrand(model).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  addNewClass() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      this.classService.newClass(result).subscribe(message => {
      });
      this.onNotify();
    });
  }
  removeClass(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.classService.deleteClass(model).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  addNewFuel() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      this.fuelService.newFuel(result).subscribe(message => {
      });
      this.onNotify();
    });
  }
  removeFuel(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.fuelService.deleteFuel(model).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  addNewModel() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      this.modelService.newModel(result).subscribe(message => {
      });
      this.onNotify();
    });
  }
  removeModel(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.modelService.deleteModel(model).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  addNewTransmission() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      this.tranService.newTransmission(result).subscribe(message => {
      });
      this.onNotify();
    });
  }
  removeTransmission(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.tranService.deleteTransmission(model).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }

  public onNotify(): void {
    this.notify.emit();
  }
}
