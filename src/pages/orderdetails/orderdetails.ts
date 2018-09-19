import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {
  stockData: any;
  heighestPrice: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
    this.stockData = this.navParams.get('data');
    this.authServ.getOrderByName(this.stockData)
    .then((data: any) => {
      var val = data.results.map(data => {
        return data.price;
      })
      var array = val;
      var largest = 0;
      for (var i=0; i<array.length;i++){
        if (array[i]>largest) {
          largest=array[i];
        }
      }
      if(this.stockData.stock_price > this.heighestPrice){
      this.heighestPrice = this.stockData.stock_price;
      } else {
      this.heighestPrice = largest;
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

}
