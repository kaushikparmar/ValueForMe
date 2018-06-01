import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StateModalPage } from './state-modal';

@NgModule({
  declarations: [
    StateModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StateModalPage),
  ],
})
export class StateModalPageModule {}
