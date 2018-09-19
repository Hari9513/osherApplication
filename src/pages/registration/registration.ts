import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  
  myGroup:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formbuilder: FormBuilder,private authServ: AuthserviceProvider) {
    
    this.myGroup = this.formbuilder.group({
      tempData: this.formbuilder.group({
      name: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(30)])],
      email: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      phone: ['', Validators.compose([Validators.required,Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^[0-9]+')])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(8), Validators.maxLength(30)])],
      country: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(30)])],
      state: ['', Validators.compose([Validators.required,Validators.minLength(2), Validators.maxLength(30)])],
      city: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      profession: ['', Validators.compose([Validators.required])]
    }),
    regArray: this.formbuilder.array([])
  })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  register(value){

    const regArrayData = this.myGroup.get('regArray') as FormArray;
    regArrayData.value.push(this.myGroup.get('tempData').value);
    const userData = regArrayData.value;
    this.authServ.registerUser(userData[0])
    .then(res => {
      if(res){
        this.navCtrl.setRoot(LoginPage);
      }
    })
    .catch(error => {
      console.log(error);
    })

  }
  loginNav(){
    this.navCtrl.setRoot(LoginPage);
  }

}
