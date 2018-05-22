import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DownloadPdfPopupPage } from './download-pdf-popup';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    DownloadPdfPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(DownloadPdfPopupPage),
    // PdfViewerModule
  ],
})
export class DownloadPdfPopupPageModule {}
