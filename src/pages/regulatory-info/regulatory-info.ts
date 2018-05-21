import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-regulatory-info',
  templateUrl: 'regulatory-info.html',
})
export class RegulatoryInfoPage {
  public selectOptions = {
    title: 'Select Birth Country'
  };
  public selectOptions1 = {
    title: 'Resident Outside India'
  };
  public selectOptions2 = {
    title: 'Select Political Exposure'
  };
  public selectOptions3 = {
    title: 'Select Annual Income'
  };
  public selectOptions4 = {
    title: 'Select Wealth Source'
  };
  public selectOptions5 = {
    title: 'Select ID Source'
  };
  public selectOptions6 = {
    title: 'Select Occupation'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegulatoryInfoPage');
  }
  nextPage(){
    this.navCtrl.push('BankDetailsPage');
  }
}
