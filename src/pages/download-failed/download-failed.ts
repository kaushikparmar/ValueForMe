import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-download-failed',
  templateUrl: 'download-failed.html',
})
export class DownloadFailedPage {
  
  constructor(public navCtrl: NavController,public renderer: Renderer, public viewCtrl:ViewController ,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'downloadModal', true);
    
    console.log('ionViewDidLoad DownloadSuccessPage');
  }
  downloadDismiss(){
    this.viewCtrl.dismiss();
  }

}
