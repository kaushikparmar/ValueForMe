import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform,AlertController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { DataProvider } from '../../providers/data/data';
declare var cordova: any;
// import { PdfViewerComponent } from 'ng2-pdf-viewer';

@IonicPage()

@Component({
  selector: 'page-download-pdf-popup',
  templateUrl: 'download-pdf-popup.html',
})
export class DownloadPdfPopupPage {
  // fileTransfer:any;
  storageDirectory: string = '';
  //  pdfSrc: string = '../assets/doc/report.pdf';
  pdfUrl:any;
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    private document: DocumentViewer,
    private transfer: FileTransfer, 
    private file: File,
    public alertCtrl:AlertController,
    public platform: Platform,
    public data: DataProvider,
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
    //   const options: DocumentViewerOptions = {
    //     title: 'My PDF'
    // }
    //   // const imgeLocation = `${cordova.file.applicationDirectory}www/assets/doc/${'report.pdf'}`;
      let pdfLocation = this.pdfUrl;
    //   console.log(pdfLocation);
    //   this.document.viewDocument(pdfLocation, 'application/pdf', options)
      let path = null;
 
      if (this.platform.is('ios')) {
        path = this.file.documentsDirectory;
      } else if (this.platform.is('android')) {
        path = this.file.externalApplicationStorageDirectory;
        
        console.log(path);
      }
   
      const transfer: FileTransferObject  = this.transfer.create();
      console.log('pdfUrl to download', this.pdfUrl);
      transfer.download(this.pdfUrl, path + 'Valufey.pdf').then(entry => {
        let url = entry.toURL();
        // path = url;
        console.log("entry",entry);
        console.log("url",url);
        console.log(path,'pdf path');
            const alertSuccess = this.alertCtrl.create({
            title: `Download Succeeded!`,
            subTitle: `File was successfully downloaded to: ${entry.toURL()}`,
            buttons: ['Ok']
          });
  
          alertSuccess.present();
          // setTimeout( ()=> function(){
          //   this.document.viewDocument(url, 'application/pdf', {});
          // },500);
  
      }, (error) => {
        console.log(error);
      });
      // this.document.viewDocument(url, 'application/pdf', {});
      // let blob: Blob = this.b64toBlob(dataBlob, 'application/pdf');
      // let pathFile: string;
      // const options : DocumentViewerOptions = {
      //   title : "My PDF"
      // }
      // this.document.viewDocument('file:///data/user/0/io.ionic.starter/files/files/www/assets/doc/report.pdf','application/pdf',{});
      // this.platform.ready().then(() => {

      //   const fileTransfer: FileTransferObject = this.transfer.create();
  
      //   const fileLocation = this.pdfUrl;
  
      //   fileTransfer.download(fileLocation, this.storageDirectory + "report.pdf").then((entry) => {
      //     const alertSuccess = this.alertCtrl.create({
      //       title: `Download Succeeded!`,
      //       subTitle: `${fileLocation} was successfully downloaded to: ${entry.toURL()}`,
      //       buttons: ['Ok']
      //     });
  
      //     alertSuccess.present();
  
      //   }, (error) => {
      //     console.log(error);
      //     const alertFailure = this.alertCtrl.create({
      //       title: `Download Failed!`,
      //       subTitle: `${fileLocation} was not successfully downloaded. Error code: ${error.code}`,
      //       buttons: ['Ok']
      //     });
  
      //     alertFailure.present();
  
      //   });
  
      // });
    }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
    this.pdfUrl = this.data.getPdfUrl();
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
