import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadSuccessPage } from './download-success';

@NgModule({
  declarations: [
    DownloadSuccessPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadSuccessPage),
  ],
})
export class DownloadSuccessPageModule {}
