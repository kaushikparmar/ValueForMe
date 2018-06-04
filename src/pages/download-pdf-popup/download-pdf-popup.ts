import { Component, Renderer, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, AlertController, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { DataProvider } from '../../providers/data/data';
import { LocalNotifications } from '@ionic-native/local-notifications';
// import { FileOpener } from '@ionic-native/file-opener';
// declare var cordova: any;
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
  pdfUrl: any;
  public isLoading: boolean = false;
  public progress: any = 0;
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modal: ModalController,
    private file: File,
    public alertCtrl: AlertController,
    // private fileOpener: FileOpener,
    private localNotification: LocalNotifications,
    public platform: Platform,
    public data: DataProvider,
    public viewCtrl: ViewController,
    public ngZone: NgZone,
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
    // this.toastMsg.displayToast('File download started', 3000, 'middle');
    // const loading = this.loadingCtrl.create({
    //   // content: "Downloading...",
    //   content: `
    //     <div class="custom-spinner-container">
    //       <div class="custom-spinner-box">${this.progress}</div>
    //     </div>`,
    //     dismissOnPageChange: true
    // });

    // loading.present();
    //   const options: DocumentViewerOptions = {
    //     title: 'My PDF'
    // }
    //   // const imgeLocation = `${cordova.file.applicationDirectory}www/assets/doc/${'report.pdf'}`;
    this.isLoading = true;
    let pdfLocation = this.pdfUrl;
    //   console.log(pdfLocation);
    //   this.document.viewDocument(pdfLocation, 'application/pdf', options)
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.externalRootDirectory;
    }
    let self = this;
    const transfer: FileTransferObject = this.transfer.create();
    this.file.createDir(path, 'Valuefy', true).then(entry => {
      let pdfFilefath = entry.nativeURL;
      console.log(pdfFilefath, 'pdfFilePath');
      transfer.onProgress((e) => {
        self.ngZone.run(()=>{
          self.progress = (e.lengthComputable) ? Math.round(e.loaded / e.total * 100) : -1;
        });
      });
      
      transfer.download(pdfLocation, pdfFilefath + 'Valuefy.pdf').then((entry) => {
        let localFileurl = entry.toURL();
        console.log(localFileurl, 'localFileUrl');
        this.isLoading = false;
        this.dismiss();
        // const alertSuccess = this.alertCtrl.create({
        //   title: `Download Succeeded!`,
        //   subTitle: `File was successfully downloaded to: ${entry.toURL()}`,
        //   buttons: [{
        //     text: 'OK',
        //     role: 'cancel',
        //     handler: () => {
        //       this.dismiss();
        //     }
        //   }]
        // });
          const alertSuccess = this.modal.create('DownloadSuccessPage',{'entry':localFileurl},
          {
            showBackdrop: false,
            enableBackdropDismiss: false,
            enterAnimation: 'modal-scale-up-enter',
            leaveAnimation: 'modal-scale-up-leave'
          }
        )
          alertSuccess.present();
          // alertSuccess.onDidDismiss( data => {
          //   this.dismiss();
          // });
        this.localNotification.schedule({
          id:1,
          text: 'Valuefy pdf file downloaded',
        })
        // const options: DocumentViewerOptions = {
        //   title: 'My PDF',
        //   openWith: true
        // }
        // this.document.viewDocument(localFileurl, 'application/pdf',options);

      }, (error) => {
        const alertDanger = this.modal.create('DownloadFailedPage',{},
        {
          showBackdrop: false,
          enableBackdropDismiss: false,
          enterAnimation: 'modal-scale-up-enter',
          leaveAnimation: 'modal-scale-up-leave'
        }
      )
        alertDanger.present();
        this.isLoading = false;
        // alertDanger.onDidDismiss( data => {
        //   this.dismiss();
        // });
        console.log(error);
      });

    })
    // transfer.download(this.pdfUrl, path + 'Valufey.pdf').then(entry => {
    //   let url = entry.toURL();
    //   // path = url;
    //   console.log("entry",entry);
    //   console.log("url",url);
    //   console.log(path,'pdf path');
    //       const alertSuccess = this.alertCtrl.create({
    //       title: `Download Succeeded!`,
    //       subTitle: `File was successfully downloaded to: ${entry.toURL()}`,
    //       buttons: ['Ok']
    //     });

    //     alertSuccess.present();
    //     // setTimeout( ()=> function(){
    //     //   this.document.viewDocument(url, 'application/pdf', {});
    //     // },500);

    // }, (error) => {
    //   console.log(error);
    // });
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

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'selectPopupModal', true);
    this.pdfUrl = this.data.getPdfUrl();
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
