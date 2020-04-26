import { CarProfilePageComponent } from './car-profile-page/car-profile-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {CommonModule} from '@angular/common';
import { RentACarHpComponent } from './rent-a-car-hp/rent-a-car-hp.component';
import {LoginComponent} from './login/login.component';
import {NewAdvertisementComponent} from "./rent-a-car-hp/advertisement/new-advertisement/new-advertisement.component";


const routes: Routes = [
  {path: 'foo', component: FooComponent},
  {path: 'homepage', component: RentACarHpComponent },
  {path: 'car-profile-page', component: CarProfilePageComponent},
  {path: 'login', component: LoginComponent}
  {path: 'homepage', component:RentACarHpComponent },
  {path: 'car-profile-page', component:CarProfilePageComponent},
  {path: 'new-advertisement', component:NewAdvertisementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
