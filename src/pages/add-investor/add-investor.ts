import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-investor',
  templateUrl: 'add-investor.html',
})
export class AddInvestorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddInvestorPage');
  }
  nextPage() {
    this.navCtrl.push('NonKycFamilyPage');
  }
}
