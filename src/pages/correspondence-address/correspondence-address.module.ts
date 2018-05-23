import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorrespondenceAddressPage } from './correspondence-address';

@NgModule({
  declarations: [
    CorrespondenceAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(CorrespondenceAddressPage),
  ],
})
export class CorrespondenceAddressPageModule {}
