import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng-starrating';

// services
import {FooService} from './foo/foo.service';

// angular material compoonents
// Nephodno instalirati sa komandom ng add @angular/material , izabrati temu: "deeppurple-amber" ili samo npm install na pocetku
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

// components
import { RentACarHpComponent } from './rent-a-car-hp/rent-a-car-hp.component';
import { AdvertisementComponent } from './rent-a-car-hp/advertisement/advertisement.component';
import {FooComponent} from './foo/foo.component';
import { AdvertisementListComponent } from './rent-a-car-hp/advertisement-list/advertisement-list.component';
import { CarProfilePageComponent } from './car-profile-page/car-profile-page.component';
import { CarRatingDialogComponent } from './requested-and-history-rents/car-rating-dialog/car-rating-dialog.component'
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ShopCartComponent } from './rent-a-car-hp/shop-cart/shop-cart.component'
import { NewAdvertisementComponent } from './rent-a-car-hp/advertisement/new-advertisement/new-advertisement.component'
import { ShopCartComponent } from './rent-a-car-hp/shop-cart/shop-cart.component';
import { RequestedAndHistoryRentsComponent } from './requested-and-history-rents/requested-and-history-rents.component';
import { CancelRentDialogComponent } from './requested-and-history-rents/cancel-rent-dialog/cancel-rent-dialog.component';
import { CommentCarDialogComponent } from './requested-and-history-rents/comment-car-dialog/comment-car-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    RentACarHpComponent,
    AdvertisementComponent,
    AdvertisementListComponent,
    CarProfilePageComponent,
    NewAdvertisementComponent,
    CarProfilePageComponent,
    CarRatingDialogComponent,
    LoginComponent,
    ShopCartComponent,
    RequestedAndHistoryRentsComponent,
    CancelRentDialogComponent,
    CommentCarDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatSelectModule,
    MatTreeModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    RatingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    FooService,
    LoginService,
    MatDatepickerModule,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill'}}
  ],
  bootstrap: [AppComponent, LoginComponent],
  entryComponents: [ //ovo mora da se doda za dijaloge
    LoginComponent,
    ShopCartComponent
  ]

})
export class AppModule { }
