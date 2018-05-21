import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-your-details',
  templateUrl: 'your-details.html',
})
export class YourDetailsPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,   
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourDetailsPage');
  }
  downloadPdf(){
      let completeModal=this.modalCtrl.create('DownloadPdfPopupPage');
      completeModal.present();
  }
}
