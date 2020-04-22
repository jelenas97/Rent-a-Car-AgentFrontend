import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {CommonModule} from '@angular/common';
import { RentACarHpComponent } from './rent-a-car-hp/rent-a-car-hp.component';


const routes: Routes = [
  {path: 'foo', component: FooComponent},
  {path: 'homepage', component:RentACarHpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
