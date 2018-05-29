import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
  public nomineeDetails = {
    'nomineeInfo': {
      'nomineeName': '',
      'nomineeRelationship': '',
      'nomineeType': '',
      'nomineeDob': '',
      'nomineePercentage': ''
    }
  }
  public nomineeName: any;
  public relationship: any;
  public nomineeType: any;
  public datePick: any;
  public percentage: any;
  constructor(public navCtrl: NavController, public data:DataProvider, public navParams: NavParams) {
  }
  checkRelation(relation) {
    this.nomineeDetails['nomineeInfo'].nomineeRelationship = relation;
  }
  getName(nominee) {
    this.nomineeDetails['nomineeInfo'].nomineeName = nominee;
  }
  checkType(type) {
    this.nomineeDetails['nomineeInfo'].nomineeType = type;
  }
  dateChanged(dob) {
    this.nomineeDetails['nomineeInfo'].nomineeDob = dob;
    this.datePicker.open();
  }
  checkShare(share) {
    this.nomineeDetails['nomineeInfo'].nomineePercentage = share;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NomineeDetailsPage');
  }
  nextPage() {
    this.navCtrl.push('RegulatoryInfoPage');
    this.data.dataSet(this.nomineeDetails);
    console.log(this.data);
  }
}
