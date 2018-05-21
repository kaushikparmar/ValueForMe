import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-non-kyc-family',
  templateUrl: 'non-kyc-family.html',
})
export class NonKycFamilyPage {
  public selectOptions = {
    title: 'Select Title'
  };
  public selectOptions1 = {
    title: 'Select Country'
  };

  public family: string = '';
  public searchControl: FormControl;
  public familyName:any;
  public searchFlag:boolean = true;
  public searching:boolean = false;
  public familyArray:any = [];
  public noResult: boolean = false;
  
  public investorPan:any;
  public searchControl1: FormControl;
  public investorPanno: any;
  public showFalseIcon: boolean = false;
  public showTrueIcon: boolean = false;
  public panSearchFlag:boolean = true;
  public panSearching:boolean = false;
  public panArray:any = [];
  
  public showOtp:boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data : DataProvider
  ) {
    this.searchControl = new FormControl();
    this.searchControl1 = new FormControl();
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredName();
    });
    this.searchControl1.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilterPan();
    });
}

 //filter name
onSearchInput(ev) {
  this.searchFlag= true;
  this.searching = true;
  let val = ev.target.value;
  this.familyArray = this.data.filterName(this.family);
  if (val && val.trim() !== '') {
    if (this.familyArray.length === 0) {
      this.noResult = true;
    } else {
      this.noResult = false;
    }
  } else {
      this.noResult = false;
  }
}

  public setFilteredName() {
      this.searching = false; 
      this.familyName = this.data.filterName(this.family);
  }

  public setValue(val){
    this.searchControl.setValue(val);
    this.searchFlag = false;  
  }


  //filter pan no
  searchPan(ev) {
    this.panSearchFlag= true;
    this.panSearching = true;
    let val = ev.target.value;
    this.panArray = this.data.filterPanData(this.investorPan);
    if (val && val.trim() !== '') {
      if (this.panArray.length === 0) {
        this.panSearching = false;
        this.showFalseIcon = true;
        this.showOtp = true;
        this.showTrueIcon = false;
      } else {
        // this.panSearching = false;
        this.showFalseIcon = false;
        this.showTrueIcon = true;
        this.showOtp = false;
      }
    } else {
        // this.panSearching = false;
        this.showOtp = false;
        this.showFalseIcon = false;
        this.showTrueIcon = false;
    }
  }

  public setFilterPan(){
    this.panSearching = false; 
    this.investorPanno = this.data.filterPanData(this.investorPan);
  }

  sendOTP(){
    let otpModal =this.modalCtrl.create('NonKycPopupPage');
    otpModal.present();
  }
  openOTP(){
    let otp =this.modalCtrl.create('OtpPopupPage');
    otp.present();
  }
}
