import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthserviceProvider } from '../../providers/authservice/authservice';
import { ChangepasswordPage } from '../changepassword/changepassword';

/**
 * Generated class for the MyaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {
  userEmail;
  currentUser: any;
  fileName: any;
  data: { fd: FormData; };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private authServ: AuthserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaccountPage');
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
  }

  
  uploadImage(files: File[]) {
    if (files.length) {
      console.log(files);
      const [file] = files;
      console.log(file.name)
      this.fileName = file.name;
      // this.fileSize = (file.size / (1024 * 1024)).toFixed(2);
      // this.fileType = file.type;
      var fd = new FormData();
      fd.append('file', file);
      this.authServ.uploadImage(fd, this.currentUser.id)
        .then((data: any) => {
          console.log(data);
          this.fileName = data.fileName;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  update(){
    this.currentUser.image = this.fileName;
    console.log(this.currentUser);
    this.authServ.updateUserByID(this.currentUser)
    .then(data => {
      console.log(data);
      this.ionViewDidLoad();
    })
    .catch(err => {
      console.log(err)
    })
  }

  editPassword(){
    this.navCtrl.setRoot(ChangepasswordPage, {
      password: this.currentUser
    });
  }

}
