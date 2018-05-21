import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvestorInfoPage } from './investor-info';

@NgModule({
  declarations: [
    InvestorInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(InvestorInfoPage),
  ],
})
export class InvestorInfoPageModule {}
