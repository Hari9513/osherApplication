import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderPage } from '../order/order';
import { TicketdetailsPage } from '../ticketdetails/ticketdetails';
import { OrderhistoryPage } from '../orderhistory/orderhistory';
import { TicketsPage } from '../tickets/tickets';
import { OrderdetailsPage } from '../orderdetails/orderdetails';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LoginPage } from '../login/login';

/**
 * Generated class for the StocksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stocks',
  templateUrl: 'stocks.html',
})
export class StocksPage {
  allStocks;
  value: any;
  color: any;
  userEmail: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertController: AlertController, private authServ: AuthserviceProvider) {
    // setInterval(() =>{
    //   this.ionViewDidLoad();
    // }, 5000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StocksPage');
    this.authServ.getAllStocks()
    .then(data => {
      this.allStocks = data.results.reverse();
    })
    .catch(err => {
      console.log(err);
    })
  }

  goOrderPage(){
    this.navCtrl.push(OrderPage);
  }

  openBuySell(stock){
    let addBuySellAlert = this.alertController.create({
      title: "Amazon",
      message:"",
      buttons:[
        {
          text:"Buy",
          cssClass:'buy-btn',
          handler: () => {
            // console.log('Cancel clicked');
            this.navCtrl.setRoot(OrderPage, 
              {
              data: stock,
              type: 'Buy'
            });
          }
        },
        {
          text:"Sell",
          cssClass:'sell-btn',
          handler: () => {
            // console.log('Cancel clicked');
            this.navCtrl.setRoot(OrderPage, 
              {
              data: stock,
              type: 'Sell'
            });
          }
        },
        {
          text:"Details",
          handler: () => {
            // console.log('Cancel clicked');
            this.navCtrl.setRoot(OrderdetailsPage, {
              data: stock
            });
          }
        }],
        cssClass: 'alertCustomCss'
    });
    addBuySellAlert.present()
  }

  loginNav(){
    this.userEmail = {
      email: localStorage.getItem('User')
    }
    this.authServ.updateUserStatusByEmail(this.userEmail)
    .then(data => {
      console.log(data);
      localStorage.removeItem('User');
      this.navCtrl.setRoot(LoginPage)
    })
    .catch(err => {
      console.log(err);
    })
  }
 
}
