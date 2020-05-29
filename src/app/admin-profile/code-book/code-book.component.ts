import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CodeBook} from 'src/app/shared/model/codeBook';
import {MatDialog} from '@angular/material/dialog';
import {CreateDialogComponent} from './create-dialog/create-dialog.component';
import {BrandService} from '../../service/brand.service';
import {ConfirmDialogComponent} from '../../shared/dialogs/confirm-dialog/confirm-dialog.component';
import {ClassService} from '../../service/class.service';
import {FuelService} from '../../service/fuel.service';
import {ModelService} from '../../service/model.service';
import {TransmissionService} from '../../service/transmission.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {
  @Input('codeBook') codeBook: CodeBook;
  @Output() notify = new EventEmitter();
  models: any;
  brand: any;
  selectedModel: any = false;
  constructor(private dialog: MatDialog, private brandService: BrandService, private classService: ClassService,
              private fuelService: FuelService, private modelService: ModelService, private tranService: TransmissionService,
              private notifier: NotifierService) {
  }

  ngOnInit(): void {
  }

  addNewBrand() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.brandService.newBrand(result).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  removeBrand(model: any) {
    this.brand = model;
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data : 'Brand',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.brandService.deleteBrand(model).subscribe(message => {
        });
        this.onNotify();
      } else if (result === 'Select_model') {
        this.modelService.getModels(model).subscribe(models => {
          this.models = models;
          this.selectedModel = true;
        });
      //  this.onNotify();
      }


    });
  }
  addNewClass() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.classService.newClass(result).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  removeClass(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
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
      if (result !== undefined) {
        this.fuelService.newFuel(result).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  removeFuel(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
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
      if (result !== undefined) {
        this.modelService.newModel(result, this.brand).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  removeModel(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
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
      if (result !== undefined) {
        this.tranService.newTransmission(result).subscribe(message => {
        });
        this.onNotify();
      }
    });
  }
  removeTransmission(model: any) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
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
    this.notifier.notify('success', 'Action successfully done! :D');
    setTimeout(() => {
      this.notifier.hideAll();
      this.notify.emit();
    }, 1000);


  }
}
