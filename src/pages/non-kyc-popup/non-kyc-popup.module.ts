import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonKycPopupPage } from './non-kyc-popup';

@NgModule({
  declarations: [
    NonKycPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(NonKycPopupPage),
  ],
})
export class NonKycPopupPageModule {}
