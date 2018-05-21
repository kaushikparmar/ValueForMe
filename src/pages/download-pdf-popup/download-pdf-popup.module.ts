import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadPdfPopupPage } from './download-pdf-popup';

@NgModule({
  declarations: [
    DownloadPdfPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadPdfPopupPage),
  ],
})
export class DownloadPdfPopupPageModule {}
