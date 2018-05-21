import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BankDetailsPopupPage } from './bank-details-popup';

@NgModule({
  declarations: [
    BankDetailsPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(BankDetailsPopupPage),
  ],
})
export class BankDetailsPopupPageModule {}
