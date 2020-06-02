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
import {CarModel} from '../../shared/model/car-model';
import {CodebookService} from '../../service/codebook.service';
import {AdminProfileComponent} from '../admin-profile.component';
import {CarBrand} from "../../shared/model/car-brand";

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('codeBook') codeBook: CodeBook;
  @Output() notify = new EventEmitter();
  models: CarModel;
  brand: any;
  selectedModel: any = false;
  constructor(private dialog: MatDialog, private brandService: BrandService, private classService: ClassService,
              private fuelService: FuelService, private modelService: ModelService, private tranService: TransmissionService,
              private notifier: NotifierService, private codebookService: CodebookService,
              private adminProfileComponent: AdminProfileComponent) {
  }

  ngOnInit(): void {
    this.codebookService.getCodeBookInfo().subscribe(codeBook => {
      this.codeBook = codeBook;
    });
  }

  addNewBrand() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.brandService.newBrand(result).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
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
      if (result === 'yes') {
        this.brandService.deleteBrand(model).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
        });
      } else if (result === 'Select_model') {
        this.modelService.getModels(model).subscribe(models => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
          this.models = models;
          this.selectedModel = true;
        });
      }
      this.onNotify();
    });
  }
  addNewClass() {
    const dialog = this.dialog.open(CreateDialogComponent, {
      width: '30%',
    });
    dialog.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.classService.newClass(result).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
        });
        this.onNotify();
      }
    });
  }
  removeClass(id: number) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.classService.deleteClass(id).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
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
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
        });
        this.onNotify();
      }
    });
  }
  removeFuel(id: number) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.fuelService.deleteFuel(id).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
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
      console.log(this.brand);
      if (result !== undefined) {
        this.modelService.newModel(result, this.brand).subscribe(message => {
          this.showModels(this.brand);
        });
      }
    });
  }
  removeModel(id: number) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
    });
    dialog.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.modelService.deleteModel(id).subscribe(message => {
          this.showModels(this.brand);
        });
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
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
        });
        this.onNotify();
      }
    });
  }
  removeTransmission(id: number) {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      data: 'Delete',
    });
    dialog.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'yes') {
        this.tranService.deleteTransmission(id).subscribe(message => {
          this.adminProfileComponent.openCodebook();
          this.adminProfileComponent.show = true;
        });
        this.onNotify();
      }
    });
  }

  public onNotify(): void {
    this.notifier.notify('success', 'Action successfully done!');
    setTimeout(() => {
      this.notifier.hideAll();
    }, 900);


  }

  showModels(brand: CarBrand) {
    this.brand = brand;
    this.modelService.getModels(brand.id).subscribe(models => {
      this.adminProfileComponent.openCodebook();
      this.adminProfileComponent.show = true;
      this.models = models;
      this.selectedModel = true;
    });
  }
}
