import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})
export class OrderhistoryPage {
  orderDatas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderhistoryPage');
    this.authServ.orderHistory()
    .then((data: any) => {
      this.orderDatas = data.results;
      console.log(this.orderDatas);
    })
    .catch(err => {
      console.log(err)
    })
  }

}
