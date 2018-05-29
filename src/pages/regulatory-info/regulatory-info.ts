import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

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
  public residentCheck:any;
  public fatchaDetails = {
    'fatchaInfo': {
      'birthPlace': '',
      'residence': '',
      'exposure': '',
      'income': '',
      'source': '',
      'identity': '',
      'occupation': ''
    }
  }
  public birthPlace:any;
  public outsideInida:any;
  public exposure:any;
  public income:any;
  public source:any;
  public identification:any;
  public occupation:any;
  public disableBtn: boolean = true;
  constructor(public navCtrl: NavController, public data:DataProvider,public navParams: NavParams) {
  }
  checkCountry(place) {
    this.fatchaDetails['fatchaInfo'].birthPlace = place;
  }
  checkResident(residence) {
    this.fatchaDetails['fatchaInfo'].residence = residence;
  }
  checkExposure(exposure) {
    this.fatchaDetails['fatchaInfo'].exposure = exposure;
  }
  checkIncome(income) {
    this.fatchaDetails['fatchaInfo'].income = income;
  }
  checkSource(source) {
    this.fatchaDetails['fatchaInfo'].source = source;
  }
  checkIndentification(id) {
    this.fatchaDetails['fatchaInfo'].identity = id;
  }
  checkOccupation(occupation) {
    this.fatchaDetails['fatchaInfo'].occupation = occupation;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegulatoryInfoPage');
  }
  checkResidency(isChecked){
    if(isChecked){
      this.disableBtn =false;
    } else this.disableBtn =true;
  }
  nextPage(){
    this.navCtrl.push('BankDetailsPage');
    this.data.dataSet(this.fatchaDetails);
    
  }
}
