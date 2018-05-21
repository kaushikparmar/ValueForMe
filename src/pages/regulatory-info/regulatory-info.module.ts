import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegulatoryInfoPage } from './regulatory-info';

@NgModule({
  declarations: [
    RegulatoryInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegulatoryInfoPage),
  ],
})
export class RegulatoryInfoPageModule {}
