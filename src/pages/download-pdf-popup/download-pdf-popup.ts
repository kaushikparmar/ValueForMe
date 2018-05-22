import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
// import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
declare var cordova: any;
// import { PdfViewerComponent } from 'ng2-pdf-viewer';

@IonicPage()

@Component({
  selector: 'page-download-pdf-popup',
  templateUrl: 'download-pdf-popup.html',
})
export class DownloadPdfPopupPage {
  // fileTransfer:any;
  // storageDirectory: string = '';
  //  pdfSrc: string = '../assets/doc/report.pdf';
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    private document: DocumentViewer,
    // private transfer: FileTransfer, 
    // private file: File,
    // public alertCtrl:AlertController,
    public platform: Platform,
    public viewCtrl: ViewController, 
    public navParams: NavParams) {
      // this.platform.ready().then(() => {
      //   // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      //   if(!this.platform.is('cordova')) {
      //     return false;
      //   }
  
      //   if (this.platform.is('ios')) {
      //     this.storageDirectory = cordova.file.documentsDirectory;
      //   }
      //   else if(this.platform.is('android')) {
      //     this.storageDirectory = 'file:///storage/emulated/0/Download';
      //   }
      //   else {
      //     // exit otherwise, but you could add further types here e.g. Windows
      //     return false;
      //   }
      // });
    }
    
    download() {
      const options: DocumentViewerOptions = {
        title: 'My PDF'
    }
      const imgeLocation = `${cordova.file.applicationDirectory}www/assets/doc/${'report.pdf'}`;
      this.document.viewDocument(imgeLocation, 'application/pdf', options)
      // let blob: Blob = this.b64toBlob(dataBlob, 'application/pdf');
      // let pathFile: string;
      // const options : DocumentViewerOptions = {
      //   title : "My PDF"
      // }
      // this.document.viewDocument('file:///data/user/0/io.ionic.starter/files/files/www/assets/doc/report.pdf','application/pdf',{});
      // this.platform.ready().then(() => {

      //   const fileTransfer: FileTransferObject = this.transfer.create();
  
      //   const fileLocation = 'file:///data/user/0/io.ionic.starter/files/www/assets/doc/report.pdf';
  
      //   fileTransfer.download(fileLocation, this.storageDirectory + "/image").then((entry) => {
      //     const alertSuccess = this.alertCtrl.create({
      //       title: `Download Succeeded!`,
      //       subTitle: `${image} was successfully downloaded to: ${entry.toURL()}`,
      //       buttons: ['Ok']
      //     });
  
      //     alertSuccess.present();
  
      //   }, (error) => {
      //     console.log(error);
      //     const alertFailure = this.alertCtrl.create({
      //       title: `Download Failed!`,
      //       subTitle: `${image} was not successfully downloaded. Error code: ${error.code}`,
      //       buttons: ['Ok']
      //     });
  
      //     alertFailure.present();
  
      //   });
  
      // });
    }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
