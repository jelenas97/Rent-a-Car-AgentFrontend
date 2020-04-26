import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//services
import {FooService} from './foo/foo.service';

//angular material compoonents
//Nephodno instalirati sa komandom ng add @angular/material , izabrati temu: "deeppurple-amber" ili samo npm install na pocetku
import {MatToolbarModule} from '@angular/material'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

//components
import { RentACarHpComponent } from './rent-a-car-hp/rent-a-car-hp.component';
import { AdvertisementComponent } from './rent-a-car-hp/advertisement/advertisement.component';
import {FooComponent} from './foo/foo.component';
import { AdvertisementListComponent } from './rent-a-car-hp/advertisement-list/advertisement-list.component';
import { CarProfilePageComponent } from './car-profile-page/car-profile-page.component';
import { ShopCartComponent } from './rent-a-car-hp/shop-cart/shop-cart.component'


@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    RentACarHpComponent,
    AdvertisementComponent,
    AdvertisementListComponent,
    CarProfilePageComponent,
    ShopCartComponent
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
    HttpClientModule
    
  ],
  providers: [FooService, MatDatepickerModule],
  entryComponents: [ //ovo mora da se doda za dijaloge
    ShopCartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
