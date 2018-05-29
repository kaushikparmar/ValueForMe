import { Component,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-non-kyc-popup',
  templateUrl: 'non-kyc-popup.html',
})
export class NonKycPopupPage {
  public pageName: any;
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl: ViewController,
    public modalCtrl:ModalController,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.pageName = this.navParams.get('pageName');
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
  openOTP(){
    console.log(this.pageName);
    if(this.pageName === 'holding'){
        this.viewCtrl.dismiss();
    } else {
      let otp =this.modalCtrl.create('OtpPopupPage');
    otp.present();
    setTimeout(() => {
      this.viewCtrl.dismiss();
  }, 500);
  }
    }
    
}
