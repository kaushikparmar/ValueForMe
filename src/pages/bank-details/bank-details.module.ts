import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankDetailsPage } from './bank-details';

@NgModule({
  declarations: [
    BankDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BankDetailsPage),
  ],
})
export class BankDetailsPageModule {}
