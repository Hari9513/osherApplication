import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { HomePage } from '../home/home';
import { MywalletPage } from '../mywallet/mywallet';

/**
 * Generated class for the PaytransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paytransfer',
  templateUrl: 'paytransfer.html',
})
export class PaytransferPage {
  phoneNotExist: any;
  user: any;
  currentUser: any;
  phone: any;
  amount: any;
  invalidAmount: string;
  transferUser: any;
  sameNumber: string;
  wallet: any; ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaytransferPage');
    this.user = {
      email: localStorage.getItem('User')
    }
    this.authServ.getUserDataByEmail(this.user)
      .then((data: any) => {
        this.currentUser = data.results[0];
        console.log(this.currentUser);
      })
      .catch(error => {
        console.log(error);
      })
  }


  phoneExist() {
    if (this.phone) {
      if(this.phone == this.currentUser.phone){
        this.sameNumber = 'Same Number';
      } else {
        this.sameNumber = '';
      this.user = {
        phone: this.phone
      }
      this.authServ.phoneExist(this.user)
        .then((data: any) => {
          console.log(data);
          if (data.results.length) {
            this.transferUser = data.results[0];
            this.phoneNotExist = '';
          } else {
            this.phoneNotExist = 'Phone Number Not Exist';
          }
        })
        .catch(error => {
          console.log(error);
        })
      }
    }
  }

  checkAmountExist() {
    console.log(this.currentUser.balance, this.amount);
    if (this.amount) {
      if (Number(this.currentUser.balance) >= Number(this.amount)) {
        this.invalidAmount = '';
        this.currentUser.balance = Number(Number(this.currentUser.balance) - Number(this.amount));
      } else {
        this.invalidAmount = 'Insufficient Balance';
      }
    }
  }

  transferAmount() {
    this.authServ.updateUserByID(this.currentUser)
      .then(data => {
        console.log(data);
        window.alert('Money Successfully Tranfered');
        this.transferUser.balance = Number(Number(this.transferUser.balance) + Number(this.amount))
        this.authServ.updateUserByID(this.transferUser)
          .then(data => {
            console.log(data);
            this.wallet = {
              debitedAmount: this.amount
            };
            this.authServ.addWallet(this.wallet)
            .then(data => {
              console.log(data)
              this.navCtrl.setRoot(MywalletPage);
            })
            .catch(err => {
              console.log(err)
            })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

}
