import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '../../../node_modules/@angular/forms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { StocksPage } from '../stocks/stocks';
const percentageValue = 1;

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  stockQuantity: any;
  somePrice;
  expextedPrice: any;
  ePrice: any;
  stockData;
  status;
  orderData: any;
  type;
  ProductPercentage = 20;
  dynamicPrice: any;
  variationPercent;
  variationAmount;
  userEmail: any;
  actualAmount: number;
  currentUser: any;
  balance: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder, private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.type = this.navParams.get('type')
    this.stockData = this.navParams.get('data');
    console.log(localStorage.getItem('User'));
    this.userEmail = {
      email: localStorage.getItem('User')
    }
  }

  onChange() {
    console.log('Calling');
    this.stockQuantity = '';
    this.expextedPrice = '';
  }

  GetPercentage() {
    if(this.stockQuantity) {
    var percent = (Number(this.stockQuantity) * percentageValue) / 100;
    if (this.type == 'Buy') {
      this.somePrice = Number(this.stockData.stock_price) + Number(percent);
    } else {
      this.somePrice = Number(this.stockData.stock_price) - Number(percent);
    }

    this.variationPercent = Number(Number(this.stockQuantity) * percentageValue);
    console.log(this.variationPercent);
    this.variationAmount = (Number(Number(this.somePrice) * this.variationPercent) / 100);
    console.log(this.variationAmount);
    if (this.type == 'Buy') {
      this.stockData.variationPercent = Number(Number(this.stockData.variationPercent) + Number(this.variationPercent))
      console.log(this.stockData.variationPercent);
      this.stockData.variationAmount = Number(Number(this.stockData.variationAmount) + Number(this.variationAmount))
      this.dynamicPrice = Number(this.stockData.stock_price) + Number(this.variationAmount);
    } else {
      this.stockData.variationPercent = Number(Number(this.stockData.variationPercent) - Number(this.variationPercent))
      this.stockData.variationAmount = Number(Number(this.stockData.variationAmount) - Number(this.variationAmount))
      this.dynamicPrice = Number(this.stockData.stock_price) - Number(this.variationAmount);
    }
    this.authServ.getUserDataByEmail(this.userEmail)
      .then((data: any) => {
        this.currentUser = data.results[0];
      })
      .catch(error => {
        console.log(error);
      })
      console.log(this.stockData);
    }
  }

  placeOrder() {
    this.ePrice = Number(this.expextedPrice);
    if (this.ePrice) {
      this.actualAmount = Number(Number(this.ePrice) * Number(this.stockQuantity))
      if (this.actualAmount <= this.currentUser.balance) {
        if (this.ePrice >= this.stockData.stock_price) {
          this.status = 'Executed';
        } else {
          this.status = 'Pending';
        }
        if(this.type == 'Buy' && this.status == 'Executed'){
          this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.ePrice));
          this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) - Number(this.stockQuantity));
          this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
        } else if(this.type == 'Sell' && this.status == 'Executed'){
          this.currentUser.balance =  Number(Number(this.currentUser.balance) + Number(this.ePrice));
          this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) + Number(this.stockQuantity));
          this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
        }
        console.log(this.currentUser)
        this.orderData = {
          userID: this.currentUser.id.toString(),
          name: this.stockData.stock_name,
          quantity: this.stockQuantity,
          price: this.ePrice,
          type: this.type,
          status: this.status
        };
        this.authServ.addOrder(this.orderData)
          .then(data => {
            console.log('Current Balance', this.currentUser);
            if (this.orderData.status == 'Executed') {
            this.authServ.updateUserByID(this.currentUser)
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            })
          }
            if (this.orderData.status == 'Executed') {
              this.stockData.stock_price = this.dynamicPrice.toFixed(2);
              this.stockData.variationPercent = this.variationPercent.toFixed(2);
              this.stockData.variationAmount = this.variationAmount.toFixed(2);
              console.log('stock Data',this.stockData);
              this.authServ.updateStockByID(this.stockData)
                .then(data => {
                  console.log("Updated");
                })
                .catch(error => {
                  console.log(error);
                })
            }
            window.alert('Order Successfully Added');
            this.navCtrl.setRoot(StocksPage);
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        window.alert('You dont have sufficient balance');
        this.stockQuantity = '';
      }
    } else {
      this.actualAmount = Number(Number(this.stockData.stock_price) * Number(this.stockQuantity));
      if (this.actualAmount <= this.currentUser.balance) {
        this.ePrice = this.stockData.stock_price;
        this.status = 'Executed';
        if(this.type == 'Buy' && this.status == 'Executed'){
          this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.ePrice))
          this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) - Number(this.stockQuantity));
          this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
        } else if(this.type == 'Sell' && this.status == 'Executed'){
          this.currentUser.balance =  Number(Number(this.currentUser.balance) + Number(this.ePrice))
          this.stockData.stock_quantity = Number(Number(this.stockData.stock_quantity) + Number(this.stockQuantity));
          this.stockData.tradedquantity = Number(Number(this.stockData.tradedquantity) + Number(this.stockQuantity));
        }
        this.orderData = {
          userID: this.currentUser.id.toString(),
          name: this.stockData.stock_name,
          quantity: this.stockQuantity,
          price: this.ePrice,
          type: this.type,
          status: this.status
        };
        this.authServ.addOrder(this.orderData)
          .then(data => {
            console.log('Current Balance', this.currentUser);
            if (this.orderData.status == 'Executed') {
            this.authServ.updateUserByID(this.currentUser)
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            })
          }
            if (this.orderData.status == 'Executed') {
              this.stockData.stock_price = this.dynamicPrice.toFixed(2);
              this.stockData.variationPercent = this.variationPercent.toFixed(2);
              this.stockData.variationAmount = this.variationAmount.toFixed(2);
              this.authServ.updateStockByID(this.stockData)
                .then(data => {
                  console.log("Updated");
                })
                .catch(error => {
                  console.log(error);
                })
            }
            window.alert('Order Successfully Added');
            this.navCtrl.setRoot(StocksPage);
          })
          .catch(err => {
            console.log(err);
          })
      } else {
        window.alert('You dont have sufficient balance');
        this.stockQuantity = '';
      }
    }
  }
}
