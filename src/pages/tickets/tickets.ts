import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TradePage } from '../trade/trade';
import { ReportsPage } from '../reports/reports';
import { MorePage } from '../more/more';
import { OrderhistoryPage } from '../orderhistory/orderhistory';

/**
 * Generated class for the TicketsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  homeRoot = HomePage;
  tradeRoot = TradePage;
  reportsRoot = OrderhistoryPage;
  moreRoot = MorePage;


  constructor(public navCtrl: NavController) {}

}
