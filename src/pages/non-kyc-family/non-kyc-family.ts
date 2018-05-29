import { Component, NgZone, ChangeDetectorRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-non-kyc-family',
  templateUrl: 'non-kyc-family.html',
})
export class NonKycFamilyPage implements OnInit {
  public selectOptions = {
    title: 'Select Title'
  };
  public selectOptions1 = {
    title: 'Select Country'
  };

  public family: string = '';
  public currentMember: any = {
    'familyName': '',
    'isNRI': false
  };
  public familyName: any;
  public familyMembers: any = [];
  public searchFlag: boolean = true;
  public searching: boolean = false;
  public familyArray: any = [];
  public noResult: boolean = false;

  public investorPan: any;
  public investorPanno: any;
  public showFalseIcon: boolean = false;
  public showTrueIcon: boolean = false;
  public panSearchFlag: boolean = true;
  public panSearching: boolean = false;
  public panArray: any = [];
  public tempCurrentMember: any = {};
  public isPANRight: boolean;

  
  public showOtp: boolean = false;
  // public country: any;
  // public countryIcon : any;
  // public tempRemove: any;

  public countryCodeArr: Array<any>  = ['+91', '+04', '+23'];
  public indianCode = '+91';
  public countryIcon: Array<Object> = [
    {
      'code': '+91',
      'icon': './assets/imgs/india-flag.png'
    },{
      'code': '+04',
      'icon': './assets/imgs/england-flag.png'
    },{
      'code': '+23',
      'icon': './assets/imgs/canada-flag.png'
    }
  ];
  public bindIcon: string;
  public showOtherCountryIcon: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _cdr: ChangeDetectorRef,
    public modalCtrl: ModalController,
    public data: DataProvider,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    
  }

  checkNRI(flagNRI) {
    if(flagNRI) {
      let checkIndex = this.countryCodeArr.indexOf('+91');
      this.countryCodeArr.splice(checkIndex, 1);
    } else {
      this.showOtherCountryIcon = false;
      this.countryCodeArr.push('+91');
      this.indianCode = '+91';
    }
  } 
  
  checkSelectedCon(myCode) {
    this.showOtherCountryIcon = true;
    for(let icons of this.countryIcon) {
      if(icons['code'] == myCode) {
        this.bindIcon = icons['icon'];
      }
    }
  }

  ionViewDidLoad() {
  }

  onFamilyNameChanged() {
    this.searching = true;
    this.searchFlag = true;
    setTimeout(
      () => {
        this.setFilteredName();
      }, 700
    );
  }



  //filter name
  onSearchInput(ev) {
    this.searchFlag = true;
    this.searching = true;
    let val = ev.target.value;
    this.familyArray = this.data.filterName(val);
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

  public isNewMember(isNew): void {
    if (isNew) {
      this.currentMember = {};
      this.currentMember['name'] = '';
      this.currentMember['title'] = '';
      this.currentMember['familyName'] = '';
      this.currentMember['mobile'] = '';
      this.currentMember['contact'] = '';
      this.currentMember['pan_no'] = '';
      this.currentMember['aadhar_no'] = '';
      this.currentMember['email'] = '';
      this.currentMember['isNRI'] = false;
      this.currentMember['isNewMember'] = true;
    }
  }

  public setFilteredName() {
    this.searching = false;
    this.familyMembers = this.data.filterName(this.currentMember.familyName);
    if (this.familyMembers.length > 0) {
      this.noResult = false;
    } else {
      this.noResult = true;
      this.searchFlag = false;
    }
  }


  public investorPAN(pan_no): void {
    this.panSearching = true;
    setTimeout(() => {
      this.ngZone.run(
        () => {
          if (this.tempCurrentMember && (this.tempCurrentMember.pan_no === pan_no)) {
            this.currentMember = JSON.parse(JSON.stringify(this.tempCurrentMember));
            // this.showTrueIcon = true;
            // this.showFalseIcon = false;
            this.isPANRight = true;
            this.panSearching = false;
            // this.showOtp = false;
          } else {
            // this.showFalseIcon = true;
            // this.showTrueIcon = false;
            this.currentMember = {};
            this.currentMember['familyName'] = this.tempCurrentMember ? this.tempCurrentMember.familyName : "";
            this.currentMember['isNRI'] = false;
            this.isPANRight = false;
            this.panSearching = false;
            // this.showOtp = true;
          }
        }
      );
    }, 700);
  }

  public setValue(member) {
    this.tempCurrentMember = member;
    this.currentMember.familyName = member.familyName;
    this.searchFlag = false;
    this.noResult = false;
  }


  //filter pan no
  searchPan(ev) {
    this.panSearchFlag = true;
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

  public setFilterPan() {
    this.panSearching = false;
    this.investorPanno = this.data.filterPanData(this.investorPan);
  }

  sendOTP() {
    let otpModal = this.modalCtrl.create('NonKycPopupPage');
    otpModal.present();
  }
  openOTP() {
    this.data.set(this.currentMember);
    this.data.dataSet(this.currentMember);
    let otp = this.modalCtrl.create('OtpPopupPage');
    otp.present();
  }
}
