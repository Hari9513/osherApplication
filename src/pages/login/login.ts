import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../registration/registration';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myGroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  notExist;
  userID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public formbuilder: FormBuilder,private authServ: AuthserviceProvider) {

    this.myGroup = this.formbuilder.group({

      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), 
      Validators.minLength(2), Validators.maxLength(30)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });

    this.email = this.myGroup.controls['email'];
    this.password = this.myGroup.controls['password'];
  }
  onSubmit(value: any): void {
if(value){
    this.authServ.login(value)
    .then((data: any) => {
      if(data.status == 200){
        console.log(data.token);
        window.alert('User Successfully LoggedIN');
        localStorage.setItem('User', data.token);
        this.userID = {
          id: data.data.results[0].id
        }
        this.authServ.updateUserStatus(this.userID)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
        this.navCtrl.setRoot(HomePage);
      }else{
        this.notExist = "Invalid email or password";
      }
    })
    .catch(error => {
      console.log(error);
    })
  }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signupNav(){
    this.navCtrl.setRoot(RegistrationPage);
  }

  forgot(){
    this.navCtrl.setRoot(ForgotpasswordPage);
  }

}
