import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StocksPage } from '../stocks/stocks';
import { AdsPage } from '../ads/ads';
import { SurveyPage } from '../survey/survey';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  tab1Root= StocksPage;
  tab2Root= AdsPage;
  tab3Root= SurveyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
