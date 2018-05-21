import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddInvestorPage } from './add-investor';

@NgModule({
  declarations: [
    AddInvestorPage,
  ],
  imports: [
    IonicPageModule.forChild(AddInvestorPage),
  ],
})
export class AddInvestorPageModule {}
