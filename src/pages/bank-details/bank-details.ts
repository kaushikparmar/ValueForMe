import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {
  public selectOptions = {
    title: 'Resident Outside India'
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,  
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BankDetailsPage');
  }
  openModal(){
    let openModal=this.modalCtrl.create('BankDetailsPopupPage');
    openModal.present();
  }
  
  nextPage(){
    this.navCtrl.push('YourDetailsPage');
  }
}
