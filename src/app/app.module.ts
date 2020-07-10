import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RatingModule} from 'ng-starrating';
import {NotifierModule, NotifierOptions} from 'angular-notifier';
// services
import {FooService} from './foo/foo.service';
// angular material compoonents
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
  MatGridListModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTreeModule} from '@angular/material/tree';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {RentACarHpComponent} from './rent-a-car-hp/rent-a-car-hp.component';
import {AdvertisementComponent} from './rent-a-car-hp/advertisement/advertisement.component';
import {FooComponent} from './foo/foo.component';
import {AdvertisementListComponent} from './rent-a-car-hp/advertisement-list/advertisement-list.component';
import {CarProfilePageComponent} from './car-profile-page/car-profile-page.component';
import {CarRatingDialogComponent} from './client-profile/history-rents/car-rating-dialog/car-rating-dialog.component';
import {LoginComponent} from './login/login.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {CodeBookComponent} from './admin-profile/code-book/code-book.component';
import {CreateDialogComponent} from './admin-profile/code-book/create-dialog/create-dialog.component';
import {ConfirmDialogComponent} from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import {ShopCartComponent} from './rent-a-car-hp/shop-cart/shop-cart.component';
import {NewAdvertisementComponent} from './rent-a-car-hp/advertisement/new-advertisement/new-advertisement.component';
import {RequestedRentsComponent} from './client-profile/requested-rents/requested-rents.component';
import {CancelRentDialogComponent} from './client-profile/requested-rents/cancel-rent-dialog/cancel-rent-dialog.component';
import {CommentCarDialogComponent} from './client-profile/history-rents/comment-car-dialog/comment-car-dialog.component';
import {RegistrationComponent} from './registration/registration.component';
import {RegistrationService} from './registration/registration.service';
import {RegisterNewUserComponent} from './admin-profile/register-new-user/registerNewUser.component';
import {RegisterNewUserService} from './admin-profile/register-new-user/registerNewUser.service';
import {UsersListComponent} from './admin-profile/users-list/users-list.component';
import {AdvertisementService} from './service/advertisement.service';
import {ClientProfileComponent} from './client-profile/client-profile.component';
import {AgentProfileComponent} from './agent-profile/agent-profile.component';
import {HistoryRentsComponent} from './client-profile/history-rents/history-rents.component';
import {ClientInfoComponent} from './client-profile/client-info/client-info.component';
import {AgentInfoComponent} from './agent-profile/agent-info/agent-info.component';
import {AdvertisementStatisticsComponent} from './advertisement-statistics/advertisement-statistics.component';
import {jqxChartModule} from 'jqwidgets-ng/jqxchart';
import {ApprovingCommentsComponent} from './admin-profile/approving-comments/approving-comments.component';
import {AuthService} from './service/auth.service';
import {ApiService} from './service/api.service';
import {ConfigService} from './service/config.service';
import {AcceptRequestsComponent} from './client-profile/accept-requests/accept-requests.component';
import {TokenInterceptor} from './interceptor/TokenInterceptor';
import {UserService} from './service/user.service';
import { AgentService } from './service/agent.service';
import { PricelistComponent } from './agent-profile/pricelist/pricelist.component';
import { PricelistService } from './service/pricelist.service';
import { MessagesComponent } from './messages/messages.component';
import {RentReportComponent} from "./agent-profile/rents/rentReport.component";
import {RentReportService} from "./agent-profile/rents/rentReport.service";
import {WriteReportDialogComponent} from "./agent-profile/write-report-dialog/writeReportDialog.component";
import { PayRentDialogComponent } from './client-profile/requested-rents/pay-rent-dialog/pay-rent-dialog.component';
import {RegisterRequestComponent} from "./admin-profile/register-request/registerRequest.component";
import {RegisterRequestService} from "./admin-profile/register-request/registerRequest.service";

const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 100,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 4000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};


// @ts-ignore
// @ts-ignore
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
    AdminProfileComponent,
    CodeBookComponent,
    CreateDialogComponent,
    ConfirmDialogComponent,
    RequestedRentsComponent,
    CancelRentDialogComponent,
    CommentCarDialogComponent,
    RegistrationComponent,
    RegisterNewUserComponent,
    RegistrationComponent,
    UsersListComponent,
    AdvertisementStatisticsComponent,
    UsersListComponent,
    ClientProfileComponent,
    AgentProfileComponent,
    HistoryRentsComponent,
    ClientInfoComponent,
    AgentInfoComponent,
    ApprovingCommentsComponent,
    AcceptRequestsComponent,
    PricelistComponent,
    MessagesComponent,
    RentReportComponent,
    WriteReportDialogComponent,
    PayRentDialogComponent,
    RegisterRequestComponent

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
    MatListModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    RatingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    jqxChartModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    FooService,
    MatDatepickerModule,
    RegistrationService,
    AdvertisementService,
    RegisterNewUserService,
    AuthService,
    ApiService,
    ConfigService,
    UserService,
    AgentService,
    PricelistService,
    RentReportService,
    RegisterRequestService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ // ovo mora da se doda za dijaloge
    LoginComponent,
    ShopCartComponent
  ]

})
export class AppModule {
}
