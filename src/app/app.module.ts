import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { HttpClientModule} from '@angular/common/http';
import { RegistrationPage } from '../pages/registration/registration';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword'
import { FormsModule } from '@angular/forms';
import { TabsPage } from '../pages/tabs/tabs';
import { StocksPage } from '../pages/stocks/stocks';
import { AdsPage } from '../pages/ads/ads';
import { SurveyPage } from '../pages/survey/survey';
import { OrderPage } from '../pages/order/order';
import { TicketdetailsPage } from '../pages/ticketdetails/ticketdetails';
import { TicketsPage } from '../pages/tickets/tickets';
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { MywalletPage } from '../pages/mywallet/mywallet';
import { PaytransferPage } from '../pages/paytransfer/paytransfer';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomescreenPage,
    LoginPage,
    RegistrationPage,
    ForgotpasswordPage,
    TabsPage,
    StocksPage,
    AdsPage,
    SurveyPage,
    OrderPage,
    OrderdetailsPage,
    OrderhistoryPage,
    TicketdetailsPage,
    TicketsPage,
    MyaccountPage,
    MywalletPage,
    PaytransferPage,
    ChangepasswordPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomescreenPage,
    LoginPage,
    RegistrationPage,
    ForgotpasswordPage,
    TabsPage,
    StocksPage,
    AdsPage,
    SurveyPage,
    OrderPage,
    OrderdetailsPage,
    OrderhistoryPage,
    TicketdetailsPage,
    TicketsPage,
    MyaccountPage,
    MywalletPage,
    PaytransferPage,
    ChangepasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthserviceProvider
  ]
})
export class AppModule {}
