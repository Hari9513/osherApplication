import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';

/**
 * Generated class for the MywalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mywallet',
  templateUrl: 'mywallet.html',
})
export class MywalletPage {
  userEmail: any;
  currentUser: any;
  orderDatas: any;
  wallet: { creditedMoney: any; couponcode: any; };
  walletDatas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertController: AlertController, private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MywalletPage');
    this.userEmail = {
      email: localStorage.getItem('User')
    }
    this.authServ.getUserDataByEmail(this.userEmail)
      .then((data: any) => {
        this.currentUser = data.results[0];
        console.log(this.currentUser);
      })
      .catch(error => {
        console.log(error);
      })

    this.authServ.orderHistory()
      .then((data: any) => {
        this.orderDatas = data.results.reverse();
        console.log(this.orderDatas);
      })
      .catch(err => {
        console.log(err)
      })

      this.authServ.getWalletDetails()
      .then((data: any) => {
        this.walletDatas = data.results.reverse();
        console.log(this.walletDatas);
      })
      .catch(err => {
        console.log(err)
      })
  }

  addMoney() {
    let addMoney = this.alertController.create({
      title: "Enter Code",
      message: "",
      inputs: [
        {
          name: 'Coupon',
          placeholder: 'Enter Coupon Code'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
            // console.log(data.Coupon)
            this.currentUser.couponcode = data.Coupon;
            this.authServ.getCouponCode(this.currentUser)
              .then((data: any) => {
                console.log(data)
                if (data.results.length) {
                  if (data.results[0].status == 1) {
                    this.currentUser.balance = Number(Number(this.currentUser.balance) + Number(data.results[0].couponamount))
                    this.authServ.updateUserByID(this.currentUser)
                      .then(value => {
                        console.log(value);
                        window.alert('Amount Added Successfully');
                        this.wallet = {
                          creditedMoney: data.results[0].couponamount,
                          couponcode: data.results[0].couponcode
                        }
                        this.authServ.addWallet(this.wallet)
                        .then(data => {
                          console.log(data)
                        })
                        .catch(err => {
                          console.log(err)
                        })
                      })
                      .catch(err => {
                        console.log(err);
                      })
                  } else {
                    window.alert('Coupon Code Expires');
                  }
                } else {
                  window.alert('Invalid Coupon Code');
                }
              })
              .catch(err => {
                console.log(err)
              })
          }
        }
      ],
      // cssClass: 'alertCustomCss'
    });
    addMoney.present()
  }

}
