import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  advertisements : any;
  empty : Boolean = true;
  ngOnInit() {
    this.advertisements = this.data;
    console.log(this.advertisements.length);
  }
  onCancelDialog(){
    this.Cancel();
  }
  Cancel(): void {
    this.onClose();
  }
  onClose(): void {
    // set the closeMessage property here
    
    this.dialogRef.close('ref');
  }
  remove(ad : any){

    const foundIndex = this.advertisements.findIndex(({ id }) => id === ad.id);
    this.advertisements = this.advertisements.filter((_, index) => index !== foundIndex);
    console.log(this.advertisements);
  }

}
