import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthCountryModalPage } from './birth-country-modal';

@NgModule({
  declarations: [
    BirthCountryModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BirthCountryModalPage),
  ],
})
export class BirthCountryModalPageModule {}
