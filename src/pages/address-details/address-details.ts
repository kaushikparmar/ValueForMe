import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-address-details',
  templateUrl: 'address-details.html',
})
export class AddressDetailsPage {
  public selectOptions = {
    title: 'Select Birth Place'
  };
  public selectOptions1 = {
    title: 'Select City'
  };
  public selectOptions2 = {
    title: 'Select State'
  };
  public selectOptions3 = {
    title: 'Select Country'
  };
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressDetailsPage');
  }
  openModal(){
    let openModal=this.modalCtrl.create('AddressDetailsPopupPage');
    openModal.present();
  }
  nextPage(){
    this.navCtrl.push('HoldingDetailsPage');
  }
}
