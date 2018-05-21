import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-holding-details',
  templateUrl: 'holding-details.html',
})
export class HoldingDetailsPage {
  @ViewChild('datePicker') datePicker;
  public selectOptions = {
    title: 'Select Title'
  };
  public selectOptions1 = {
    title: 'Select Birth Place'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoldingDetailsPage');
  }
  dateChanged() {
    this.datePicker.open();
  }
  nextPage(){
    this.navCtrl.push('NomineeDetailsPage');
  }
}
