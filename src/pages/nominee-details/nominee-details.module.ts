import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NomineeDetailsPage } from './nominee-details';

@NgModule({
  declarations: [
    NomineeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NomineeDetailsPage),
  ],
})
export class NomineeDetailsPageModule {}
