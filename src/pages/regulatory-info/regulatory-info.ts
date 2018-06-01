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
  @ViewChild('outsideIndia1') outsideIndia1;
  @ViewChild('exposure1') exposure1;
  @ViewChild('income1') income1;
  @ViewChild('source1') source1;
  @ViewChild('identfication1') identfication1;
  @ViewChild('occuptaion1') occuptaion1;
  
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
  checkResident(event) {
    this.fatchaDetails['fatchaInfo'].residence = event;
    if(event === 'Yes'){
      this.showSection = true;
      this.outsideInida = event;
      this.outsideIndia1.close();
    } else {
      this.showSection = false; 
      this.outsideInida = event;
      this.outsideIndia1.close();
      
    } 
  }
  
  checkExposure(event) {
    this.fatchaDetails['fatchaInfo'].exposure = event;
    this.exposure = event;
    this.exposure1.close();

  }
  checkIncome(event) {
    this.fatchaDetails['fatchaInfo'].income = event;
    this.income = event;
    this.income1.close();
  }
  checkSource(event) {
    this.fatchaDetails['fatchaInfo'].source = event;
    this.source = event;
    this.source1.close();
  }
  checkIndentification(event) {
    this.fatchaDetails['fatchaInfo'].identity = event;
    this.identification = event;
    this.identfication1.close();
  }
  checkOccupation(event) {
    this.fatchaDetails['fatchaInfo'].occupation = event;
    this.occupation = event;
    this.occuptaion1.close();
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
