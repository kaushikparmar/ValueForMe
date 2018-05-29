import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NonKycFamilyPage } from './non-kyc-family';
import { SharedModule } from '../../app/shared.module';

@NgModule({
  declarations: [
    NonKycFamilyPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(NonKycFamilyPage),
  ],
})
export class NonKycFamilyPageModule {}
