import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-nominee-details',
  templateUrl: 'nominee-details.html',
})
export class NomineeDetailsPage {
  @ViewChild('datePicker') datePicker;
  public selectOptions = {
    title: 'Select Relationship'
  };
  public selectOptions1 = {
    title: 'Select Type'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NomineeDetailsPage');
  }
  dateChanged() {
    this.datePicker.open();
  }
  nextPage(){
    this.navCtrl.push('RegulatoryInfoPage');
  }
}
