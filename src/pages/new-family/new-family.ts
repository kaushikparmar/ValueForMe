import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-family',
  templateUrl: 'new-family.html',
})
export class NewFamilyPage {
  public selectOptions = {
    title: 'Select Title'
  };
  public selectOptions1 = {
    title: 'Select Country'
  };
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFamilyPage');
  }
  sendOTP(){
    let otpModal =this.modalCtrl.create('OtpPopupPage');
    otpModal.present();
  }
}
