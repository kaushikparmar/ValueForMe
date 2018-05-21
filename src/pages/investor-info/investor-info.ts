import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-investor-info',
  templateUrl: 'investor-info.html',
})
export class InvestorInfoPage {
  @ViewChild('datePicker') datePicker;
  public selectOptions = {
    title: 'Marital Status'
  };
  public selectOptions1 = {
    title: 'Select Gender'
  };
  public selectOptions2 = {
    title: 'Select Investment Type'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestorInfoPage');
  }
  dateChanged() {
    this.datePicker.open();
  }
  nextPage(){
    this.navCtrl.push('AddressDetailsPage');
  }
}
