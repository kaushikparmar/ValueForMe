import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressDetailsPage } from './address-details';

@NgModule({
  declarations: [
    AddressDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressDetailsPage),
  ],
})
export class AddressDetailsPageModule {}
