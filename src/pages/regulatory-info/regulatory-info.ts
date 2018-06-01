import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-regulatory-info',
  templateUrl: 'regulatory-info.html',
})
export class RegulatoryInfoPage {
  @ViewChild('birthPlace1') birthPlace1;
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
      'occupation': '',
      'nriCountry' : '',
      'tniNo' : ''
    }
  }
  public currentMember:any;
  // public selectedUserCoutnry: any;
  public tinNo:any;
  public birthPlace:any;
  public outsideInida:any;
  public exposure:any = 'No';
  public income:any = '5L TO 10L';
  public source:any = 'Salary';
  public identification:any = 'Aadhar Card';
  public occupation:any = 'Private Sector Service';
  public disableBtn: boolean = true;
  public nriCountry:any;
  public showSection:boolean = false;
  constructor(public navCtrl: NavController, public data:DataProvider,public navParams: NavParams) {
    this.fatchaDetails['fatchaInfo'].income = this.income;
    this.fatchaDetails['fatchaInfo'].source = this.source;
    this.fatchaDetails['fatchaInfo'].identity = this.identification;
    this.fatchaDetails['fatchaInfo'].occupation = this.occupation;
    this.fatchaDetails['fatchaInfo'].exposure = this.exposure;
  }
  checkCountry(event) {
    this.birthPlace  = event;
    this.birthPlace1.close();
    this.fatchaDetails['fatchaInfo'].birthPlace = event;
  }
  checkResident(residence) {
    this.fatchaDetails['fatchaInfo'].residence = residence;
    if(residence === 'Yes'){
      this.showSection = true; 
    } else {
      this.showSection = false; 
    } 
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
  checkNRICountry(nri){
    this.fatchaDetails['fatchaInfo'].nriCountry = nri; 
  }
  checkTINno(tinNo) {
    this.fatchaDetails['fatchaInfo'].tniNo = tinNo; 
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegulatoryInfoPage');
    this.currentMember = this.data.get();
    if (this.currentMember.isNRI !== undefined && this.currentMember.isNRI === true) {
      // this.selectedUserCoutnry = '';
      this.fatchaDetails['fatchaInfo'].birthPlace = this.birthPlace;
      this.fatchaDetails['fatchaInfo'].birthPlace = this.outsideInida;
    } else {
      // this.selectedUserCoutnry = 'India';
      this.birthPlace='India';
      this.outsideInida='No';
      this.fatchaDetails['fatchaInfo'].birthPlace = 'India';
      this.fatchaDetails['fatchaInfo'].residence = 'No';
    }
  }
  checkResidency(isChecked){
    if(isChecked){
      this.disableBtn =false;
    } else this.disableBtn =true;
  }
  nextPage(){
    this.navCtrl.push('BankDetailsPage');
    this.data.dataSet(this.fatchaDetails);
    console.log(this.data);
  }
}
