import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaytransferPage } from './paytransfer';

@NgModule({
  declarations: [
    PaytransferPage,
  ],
  imports: [
    IonicPageModule.forChild(PaytransferPage),
  ],
})
export class PaytransferPageModule {}
