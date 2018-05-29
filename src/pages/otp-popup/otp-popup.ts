import { Component,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-otp-popup',
  templateUrl: 'otp-popup.html',
})
export class OtpPopupPage {

  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl: ViewController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public dismiss(): void {
    this.navCtrl.push('InvestorInfoPage');
    setTimeout(() => {
      this.viewCtrl.dismiss();
  }, 500);
  }

  public dismissModal(): void{
    this.viewCtrl.dismiss(); 
  }
}
