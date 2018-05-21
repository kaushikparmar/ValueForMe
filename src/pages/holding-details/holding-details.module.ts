import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HoldingDetailsPage } from './holding-details';

@NgModule({
  declarations: [
    HoldingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HoldingDetailsPage),
  ],
})
export class HoldingDetailsPageModule {}
