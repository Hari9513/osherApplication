import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketdetailsPage } from './ticketdetails';

@NgModule({
  declarations: [
    TicketdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketdetailsPage),
  ],
})
export class TicketdetailsPageModule {}
