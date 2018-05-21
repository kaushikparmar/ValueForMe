import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-address-details-popup',
  templateUrl: 'address-details-popup.html',
})
export class AddressDetailsPopupPage {

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
    this.viewCtrl.dismiss();
  }

}
