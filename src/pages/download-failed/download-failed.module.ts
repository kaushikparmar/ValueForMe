import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadFailedPage } from './download-failed';

@NgModule({
  declarations: [
    DownloadFailedPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadFailedPage),
  ],
})
export class DownloadFailedPageModule {}
