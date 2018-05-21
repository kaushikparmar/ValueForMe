import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourDetailsPage } from './your-details';

@NgModule({
  declarations: [
    YourDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourDetailsPage),
  ],
})
export class YourDetailsPageModule {}
