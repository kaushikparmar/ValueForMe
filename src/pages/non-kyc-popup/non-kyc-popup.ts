import { Component,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-non-kyc-popup',
  templateUrl: 'non-kyc-popup.html',
})
export class NonKycPopupPage {

  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl: ViewController,
    public modalCtrl:ModalController,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
  openOTP(){
    let otp =this.modalCtrl.create('OtpPopupPage');
    otp.present();
    setTimeout(() => {
      this.viewCtrl.dismiss();
  }, 500);
  }
}
