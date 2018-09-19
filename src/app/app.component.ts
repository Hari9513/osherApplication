import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HomescreenPage } from '../pages/homescreen/homescreen';
import { LoginPage } from '../pages/login/login';
// import { RegistrationPage } from '../pages/registration/registration';
// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
// import { TabsPage } from '../pages/tabs/tabs';
import { StocksPage } from '../pages/stocks/stocks';
import { AdsPage } from '../pages/ads/ads';
// import { SurveyPage } from '../pages/survey/survey';
import { OrderPage } from '../pages/order/order';
import { OrderdetailsPage } from '../pages/orderdetails/orderdetails';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { MyaccountPage } from '../pages/myaccount/myaccount';
import { MywalletPage } from '../pages/mywallet/mywallet';
import { PaytransferPage } from '../pages/paytransfer/paytransfer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StocksPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'HomeScreen', component: HomescreenPage },
      { title: 'Login', component: LoginPage },
      // { title: 'Registration', component: RegistrationPage },
      // { title: 'Services', component: TabsPage },
      { title: 'Stock', component: StocksPage },
      { title: 'Ads', component: AdsPage },
      { title: 'Order', component: OrderPage },
      { title: 'Order Details', component: OrderdetailsPage },
      { title: 'Order History', component: OrderhistoryPage },
      { title: 'My Account', component: MyaccountPage },
      { title: 'My Wallet', component: MywalletPage },
      { title: 'Pay Transfer', component: PaytransferPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
   
    this.nav.setRoot(page.component);
  }
}
