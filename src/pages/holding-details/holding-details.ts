import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-holding-details',
  templateUrl: 'holding-details.html',
})
export class HoldingDetailsPage implements OnInit {
  @ViewChild('datePicker') datePicker;
  public defaultBank = "ICICI Bank LTD.";
  public accountNo: any = "412739865024";
  public reAccountNo: any = "412739865024";
  jointHolderDetails: FormGroup;
  public selectOptions = {
    title: 'Select Title'
  };
  public selectOptions1 = {
    title: 'Select Birth Place'
  };
  public selectOptions2 = {
    title: 'Marital Status'
  };
  public selectOptions3 = {
    title: 'Select Title'
  };
  public selectOptions4 = {
    title: 'Select Account Type'
  };
  public selectOptions5 = {
    title: 'Select Nominee'
  };
  public selectOptions6 = {
    title: 'Select Joint Holder'
  };
  showDetails1: boolean = false;
  showDetails2: boolean = false;
  showDetails3: boolean = false;
  ifsc: any;
  branchName: any;
  branchAddress: any;
  checkIfsc: boolean = false;
  showError: boolean = false;
  hideJointDetails: boolean = false;
  panNo: any;
  checkPanno: boolean = false;
  showPanError:boolean = false;
  showPanel:boolean = false;
  properPan:boolean = false;
  nominee: any;

  public jointHolderData= {
    'jointHolderInfo' : 
      {
        'panNumber' : '',
        'aadharNumber' : '',
        'jointHolderName' : '',
        'emailId' : '',
        'dob' : '',
        'nominee' : ''
      }
  }

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HoldingDetailsPage');
  }

  public panDetails: any = [
    {
      'panNo' : 'ABC1234567'
    }
  ]

  public accountDetails: any = [
    {
      'ifsc': '23405394303',
      'branchName': 'MUMBAI-SERUL',
      'branchAddress': 'Coral Crest Co-Op Soc, Unit 14, Plot No3, Sector 23, Nerul East- 4000706.'
    }
  ];

  ngOnInit() {
    this.jointHolderDetails = new FormGroup({
      accountNumber: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      re_accountNumber: new FormControl('', [Validators.required, this.equalto('accountNumber')]),
      ifsc: new FormControl(''),
      branchName: new FormControl(''),
      branchAddress: new FormControl(''),
      nominee : new FormControl(''),
      holderPan : new FormControl(''),
      emailId: new FormControl(''),
      aadharNo: new FormControl(''),
      holderName : new FormControl(''),
      dob: new FormControl(''),
      jointHolder: new FormControl('')
    });
    this.jointHolderDetails.controls['nominee'].setValue('No');
    this.jointHolderDetails.controls['jointHolder'].setValue('Single');
  }
  checkJointHolder() {
    if(this.jointHolderDetails.get('jointHolder').value === 'Joint Holder'){
      this.hideJointDetails = true;
    }
    if(this.jointHolderDetails.get('jointHolder').value === 'Single'){
      this.hideJointDetails = false;
    }
  }
  
  checkIFSC() {
    this.checkIfsc = true;
    let ifsc = this.jointHolderDetails.get('ifsc').value;
    setTimeout(() => {
      this.checkIfsc = false;
    }, 700);
    this.showError = false;
    for (let obj of this.accountDetails) {
      if (obj.ifsc === ifsc) {
        this.jointHolderDetails.controls['branchName'].setValue(obj.branchName);
        this.jointHolderDetails.controls['branchAddress'].setValue(obj.branchAddress);
        setTimeout(() => {
          this.showError = false;
        }, 700);
      } else {
        this.jointHolderDetails.controls['branchName'].setValue('');
        this.jointHolderDetails.controls['branchAddress'].setValue('');
        setTimeout(() => {
          this.showError = true;
        }, 700);
      }
    }
  }
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      let isValid = control.root.value[field_name] == input
      if (!isValid)
        return { 'equalTo': { isValid } }
      else
        return null;
    };
  }
  checkLimit(max): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let input = control.value;
      console.log(input);
      let isValid = input.value && (isNaN(input.value) || input.value > max);
      console.log(isValid);
      if (!isValid)
        return { 'range': { isValid } }
      else
        return null;
    };
  }

  checkPan() {
    this.checkPanno = true;
    let panNo = this.jointHolderDetails.get('holderPan').value;
    setTimeout(() => {
      this.checkPanno = false;
    }, 700);
    this.showPanError = false;
    for (let obj of this.panDetails) {
      if (obj.panNo === panNo) {
        setTimeout(() => {
          this.showPanError = false;
        }, 700);
        this.jointHolderData['jointHolderInfo'].panNumber = panNo;
        this.showPanel = false;
        this.properPan=true;
      } else {
        setTimeout(() => {
          this.showPanError = true;
        }, 700);
        this.properPan=false;
        this.showPanel = true;
      }
    }
  }

  openModal() {
    let openModal = this.modalCtrl.create('BankDetailsPopupPage');
    openModal.present();
    openModal.onDidDismiss(data => {
      if (data !== undefined) {
        this.defaultBank = data;
      }
    });
  }
  dateChanged() {
    this.datePicker.open();
    this.jointHolderData['jointHolderInfo'].dob = this.jointHolderDetails.get('dob').value;
  }

  email() {
    this.jointHolderData['jointHolderInfo'].emailId = this.jointHolderDetails.get('emailId').value;
  }
  aadhar() {
    this.jointHolderData['jointHolderInfo'].aadharNumber = this.jointHolderDetails.get('aadharNo').value;
  }
  holdername() {
    this.jointHolderData['jointHolderInfo'].jointHolderName = this.jointHolderDetails.get('holderName').value;
  }
  sendOTP() {
    let otpModal = this.modalCtrl.create('NonKycPopupPage',{pageName : 'holding'});
    otpModal.present();
  }

  nextPage() {
    if(this.jointHolderDetails.get('nominee').value === 'Yes' ) {
      this.navCtrl.push('NomineeDetailsPage');
      this.jointHolderData['jointHolderInfo'].nominee = this.jointHolderDetails.get('nominee').value;
    } else if(this.jointHolderDetails.get('nominee').value === 'No') {
      this.navCtrl.push('RegulatoryInfoPage');
      this.jointHolderData['jointHolderInfo'].nominee = this.jointHolderDetails.get('nominee').value;
    } else {
      this.navCtrl.push('NomineeDetailsPage');
    }
    this.data.dataSet(this.jointHolderData);
    console.log(this.data);
  }
  openPanel1() {
    this.showDetails1 = !this.showDetails1;
    this.showDetails2 = false;
    this.showDetails3 = false;
  }
  openPanel2() {
    this.showDetails1 = false;
    this.showDetails2 = !this.showDetails2;
    this.showDetails3 = false;
  }
  openPanel3() {
    this.showDetails1 = false;
    this.showDetails2 = false;
    this.showDetails3 = !this.showDetails3;
  }

}
