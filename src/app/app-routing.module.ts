import {AgentProfileComponent} from './agent-profile/agent-profile.component';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {RequestedRentsComponent} from './client-profile/requested-rents/requested-rents.component';
import {CarProfilePageComponent} from './car-profile-page/car-profile-page.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooComponent} from './foo/foo.component';
import {CommonModule} from '@angular/common';
import {RentACarHpComponent} from './rent-a-car-hp/rent-a-car-hp.component';
import {LoginComponent} from './login/login.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {NewAdvertisementComponent} from './rent-a-car-hp/advertisement/new-advertisement/new-advertisement.component';
import {RegistrationComponent} from './registration/registration.component';
import {AdvertisementStatisticsComponent} from './advertisement-statistics/advertisement-statistics.component';
import {RegisterNewUserComponent} from './admin-profile/register-new-user/registerNewUser.component';

const routes: Routes = [
  {path: 'foo', component: FooComponent},
  {path: 'homepage', component: RentACarHpComponent},
  {path: 'car-profile-page', component: CarProfilePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: AdminProfileComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'homepage', component: RentACarHpComponent},
  {path: 'car-profile-page/:id', component: CarProfilePageComponent},
  {path: 'new-advertisement', component: NewAdvertisementComponent},
  {path: 'requested-and-history-rents', component: RequestedRentsComponent},
  {path: 'admin/user', component: RegisterNewUserComponent},
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'agent-profile', component: AgentProfileComponent},
  {path: 'advertisement-statistics', component: AdvertisementStatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
