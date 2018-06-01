import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthPlaceModalPage } from './birth-place-modal';

@NgModule({
  declarations: [
    BirthPlaceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BirthPlaceModalPage),
  ],
})
export class BirthPlaceModalPageModule {}
