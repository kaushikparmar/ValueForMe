import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DownloadSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download-success',
  templateUrl: 'download-success.html',
})
export class DownloadSuccessPage {
  public pdfLink: any;
  constructor(public navCtrl: NavController,public renderer: Renderer, public viewCtrl:ViewController ,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'downloadModal', true);
    this.pdfLink = this.navParams.get('entry');
    console.log(this.pdfLink,'pdflink');
    console.log('ionViewDidLoad DownloadSuccessPage');
  }
  downloadDismiss(){
    this.viewCtrl.dismiss();
  }
}
