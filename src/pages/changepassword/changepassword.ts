import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { MyaccountPage } from '../myaccount/myaccount';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  currentPassword;
  newPassword;
  confirmPassword;
  currentUserPass: any;
  currentPassGroup: FormGroup;
  newPassGroup: FormGroup;
  wrongPass: string;
  userUpdate: any;
  checkPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuild: FormBuilder, private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
    console.log(this.navParams.get('password'));
    this.currentUserPass = this.navParams.get('password');
  }

  changePassword() {
    console.log(this.currentPassword, this.newPassword, this.confirmPassword);
    if (this.newPassword === this.confirmPassword) {
      this.userUpdate = {
        email: this.currentUserPass.email,
        newpassword: this.newPassword
      }
      this.authServ.newPassword(this.userUpdate)
        .then((data: any) => {
          window.alert('Password Updated Successfully');
          this.navCtrl.push(MyaccountPage);
        })
        .catch(error => {
          console.log(error);
        })
    } else {
      console.log('Incorrect');
      this.checkPassword = 'Incorrect';
    }
  }

  onCurrentPas() {
    if (this.currentPassword) {
      if (this.currentUserPass.password != this.currentPassword) {
        this.wrongPass = 'Wrong';
        console.log('Equal');
      } else {
        this.wrongPass = '';
      }
    }
  }

  forgotPassword() {
    this.navCtrl.setRoot(ForgotpasswordPage);
  }

}
