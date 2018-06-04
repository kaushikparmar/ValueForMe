import { Component, NgZone, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';


@IonicPage()
@Component({
  selector: 'page-non-kyc-family',
  templateUrl: 'non-kyc-family.html',
})
export class NonKycFamilyPage implements OnInit {
  @ViewChild('countryCode') countryCode;
  @ViewChild('title') title;
  
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
  public isPANExist: boolean = false;

  
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
    // this.setCustomTransitions();
  }

  ngOnInit() {
    
  }
  countryClose(event){
    this.countryCode.close();
    this.showOtherCountryIcon = true;
    for(let icons of this.countryIcon) {
      if(icons['code'] == event) {
        this.bindIcon = icons['icon'];
      }
    }
    this.indianCode = event;  
  }


  closeTitle(event) {
    this.title.close();
    this.currentMember.title = event;
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
  
  // checkSelectedCon(myCode) {
  //   this.showOtherCountryIcon = true;
  //   for(let icons of this.countryIcon) {
  //     if(icons['code'] == myCode) {
  //       this.bindIcon = icons['icon'];
  //     }
  //   }
  // }

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
    let self = this;
    if (pan_no.length === 10 && (this.currentMember.isNewMember === undefined || this.currentMember.isNewMember === false)) {
      this.panSearching = true;
      setTimeout(() => {
      this.ngZone.run(
        () => {
            if (self.tempCurrentMember!==undefined && self.tempCurrentMember.pan_no!==undefined && (self.tempCurrentMember.pan_no.toLowerCase() === pan_no.toLowerCase())) {
              self.currentMember = JSON.parse(JSON.stringify(self.tempCurrentMember));
              // self.showTrueIcon = true;
              // self.showFalseIcon = false;
              self.isPANRight = true;
              self.panSearching = false;
              // self.showOtp = false;
            } else {
              // self.showFalseIcon = true;
              // self.showTrueIcon = false;
              // self.currentMember = {};
              self.currentMember['familyName'] = self.tempCurrentMember ? self.tempCurrentMember.familyName : "";
              self.currentMember['isNRI'] = false;
              self.isPANRight = false;
              self.panSearching = false;
              // self.showOtp = true;
            }
        }
      );
    }, 700);
    }
    if (this.currentMember.isNewMember === true && pan_no.length === 10) {
      let pan = this.data.filterPanData(pan_no);
      if (pan !== undefined && pan.length !== undefined && pan.length > 0) {
        this.isPANExist = true;
      } else {
        this.isPANExist = false;
      }
    }
  }

  public setValue(member) {
    this.tempCurrentMember = undefined;
    this.tempCurrentMember = {};
    this.tempCurrentMember = JSON.parse(JSON.stringify(member));
    this.ngZone.run(
      () => {
      this.isNewMember(true);
      this.currentMember['isNewMember'] = false;
      this.currentMember['familyName'] = member.familyName;
      }
    );
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
    let otpModal = this.modalCtrl.create('NonKycPopupPage',{},{
      showBackdrop: false,
      enableBackdropDismiss: false,
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });
    otpModal.present();
  }
  openOTP() {
    this.data.set(this.currentMember);
    this.data.dataSet(this.currentMember);
    let otp = this.modalCtrl.create('OtpPopupPage',{},{
      showBackdrop: false,
      enableBackdropDismiss: false,
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });
    otp.present();
  }
}
