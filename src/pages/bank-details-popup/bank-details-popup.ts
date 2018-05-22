import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bank-details-popup',
  templateUrl: 'bank-details-popup.html',
})
export class BankDetailsPopupPage {

  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl:ViewController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public selectBank(bank): void {
    this.viewCtrl.dismiss(bank);
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }


}
