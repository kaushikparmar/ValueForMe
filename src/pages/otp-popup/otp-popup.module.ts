import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtpPopupPage } from './otp-popup';

@NgModule({
  declarations: [
    OtpPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(OtpPopupPage),
  ],
})
export class OtpPopupPageModule {}
