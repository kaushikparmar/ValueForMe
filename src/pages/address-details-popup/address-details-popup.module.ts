import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressDetailsPopupPage } from './address-details-popup';

@NgModule({
  declarations: [
    AddressDetailsPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressDetailsPopupPage),
  ],
})
export class AddressDetailsPopupPageModule {}
