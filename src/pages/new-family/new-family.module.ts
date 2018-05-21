import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFamilyPage } from './new-family';

@NgModule({
  declarations: [
    NewFamilyPage
  ],
  imports: [
    IonicPageModule.forChild(NewFamilyPage)
  ],
})
export class NewFamilyPageModule {}
