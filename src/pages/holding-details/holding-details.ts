import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Form } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-holding-details',
  templateUrl: 'holding-details.html',
})
export class HoldingDetailsPage implements OnInit {
  @ViewChild('datePicker') datePicker;
  @ViewChild('datePicker1') datePicker1;
  @ViewChild('datePicker2') datePicker2;
  @ViewChild('jointHolderClose') closeJointHolder;
  @ViewChild('jointHolderTitle') closeJointHolderTitle;
  @ViewChild('jointBirthCity') closeJointBirthCity;
  @ViewChild('checkNominee') checkNominee;
  

  
  public defaultBank = "ICICI Bank LTD.";
  public accountNo: any = "412739865024";
  public reAccountNo: any = "412739865024";
  public showAadharError: boolean = false;
  public showSecondNominee: boolean = false;
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
  public selectOptions7 = {
    title: 'Select Relationship'
  };
  public selectOptions8 = {
    title: 'Select Type'
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
  hideNomineeSection: boolean = false;
  panNo: any;
  checkPanno: boolean = false;
  showPanError:boolean = false;
  showPanel:boolean = false;
  properPan:boolean = false;
  nominee: any;

  properAadhar:boolean =false;
  checkAadharno:boolean =false;

  public nomineeName: any;
  public relationship: any;
  public nomineeType: any;
  public datePick: any;
  public percentage: any;

  public nomineeDetails = {
    'nomineeInfo': {
      'nomineeName': '',
      'nomineeRelationship': '',
      'nomineeType': '',
      'nomineeDob': '',
      'nomineePercentage': ''
    }
  }

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
      'panNo' : 'BFTHD4619M'
    }
  ]

  public accountDetails: any = [
    {
      'ifsc': 'ICIC0001238',
      'aadharNo': '5420456112345',
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
      jointHolder: new FormControl(''),
      nomineeName: new FormControl(''),
      relationship: new FormControl(''),
      nomineeType: new FormControl(''),
      percentage: new FormControl(''),
      datePick: new FormControl(''),
      percentage2: new FormControl(''),
      jointTitle: new FormControl(''),
      birthCity: new FormControl('')

    });
    this.jointHolderDetails.controls['nominee'].setValue('No');
    this.jointHolderDetails.controls['jointHolder'].setValue('Single');
  }
  // checkJointHolder() {
  //   if(this.jointHolderDetails.get('jointHolder').value === 'Joint Holder'){
  //     this.hideJointDetails = true;
  //   }
  //   if(this.jointHolderDetails.get('jointHolder').value === 'Single'){
  //     this.hideJointDetails = false;
  //   }
  // }
  joitnHolderClose(event){
    // this.selectInvestor.close();
    // this.investorType = event;
    if(event === 'Joint Holder'){
      this.jointHolderDetails.controls['jointHolder'].setValue(event);
      this.hideJointDetails = true;
      this.closeJointHolder.close();
    }
    if(event === 'Single'){
      this.jointHolderDetails.controls['jointHolder'].setValue(event);
      this.hideJointDetails = false;
      this.closeJointHolder.close();
    }
    if(event === 'Anyone or Survivor'){
      this.jointHolderDetails.controls['jointHolder'].setValue(event);
      this.hideJointDetails = false;
      this.closeJointHolder.close();
    }
  }
  jointTitleClose(event){
    this.closeJointHolderTitle.close();
    this.jointHolderDetails.controls['jointTitle'].setValue(event);
  }
  jointBithClose(event) {
    this.closeJointBirthCity.close();
    this.jointHolderDetails.controls['birthCity'].setValue(event);
  }
  
  checkNomineeSection(event) {
    if(event === 'Yes'){
      this.jointHolderDetails.controls['nominee'].setValue(event);
      this.hideNomineeSection = true;
      this.checkNominee.close();
    }
    if(event === 'No'){
      this.jointHolderDetails.controls['nominee'].setValue(event);
      this.hideNomineeSection = false;
      this.checkNominee.close();
    }
  }
  
  checkIFSC() {
    this.checkIfsc = true;
    let ifsc = this.jointHolderDetails.get('ifsc').value;
    setTimeout(() => {
      this.checkIfsc = false;
    }, 700);
    this.showError = false;
    // this.showAadharError= false;
    for (let obj of this.accountDetails) {
      if (obj.ifsc === ifsc) {
        this.jointHolderDetails.controls['branchName'].setValue(obj.branchName);
        this.jointHolderDetails.controls['branchAddress'].setValue(obj.branchAddress);
        setTimeout(() => {
          this.showError = false;
        }, 700);
        // this.showAadharError=false;
      } else {
        this.jointHolderDetails.controls['branchName'].setValue('');
        this.jointHolderDetails.controls['branchAddress'].setValue('');
        setTimeout(() => {
          this.showError = true;
        }, 700);
        // this.showAadharError=true;
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
    let aadharNo = this.jointHolderDetails.get('aadharNo').value;
    setTimeout(() => {
      this.checkPanno = false;
    }, 700);
    this.showPanError = false;
    this.showAadharError = false;
    
    for (let obj of this.panDetails) {
      if (obj.panNo === panNo) {
        setTimeout(() => {
          this.showPanError = false;
        }, 700);
        this.jointHolderData['jointHolderInfo'].panNumber = panNo;
        this.showPanel = false;
        this.properPan=true;
        this.showAadharError = false;
      } else {
        setTimeout(() => {
          this.showPanError = true;
        }, 700);
        this.properPan=false;
        this.showPanel = true;
        this.showAadharError = true;
        
      }
    }
    
  }
  aadhar() {
    this.checkAadharno = true;
    
    let aadharNo = this.jointHolderDetails.get('aadharNo').value;
    setTimeout(() => {
      this.checkAadharno = false;
    }, 700);
    this.showAadharError = false;
    for (let obj of this.accountDetails) {
      if (obj.aadharNo === aadharNo) {
        setTimeout(() => {
          this.showAadharError = false;
        }, 700);
        this.jointHolderData['jointHolderInfo'].aadharNumber = aadharNo;
        this.properAadhar=true;
        this.showAadharError = false;
        
      } else {
        setTimeout(() => {
          this.showAadharError = true;
        }, 700);
        this.properAadhar=false;
        this.showAadharError = true;
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
  
  holdername() {
    this.jointHolderData['jointHolderInfo'].jointHolderName = this.jointHolderDetails.get('holderName').value;
  }
  sendOTP() {
    let otpModal = this.modalCtrl.create('NonKycPopupPage',{pageName : 'holding'});
    otpModal.present();
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

  checkRelation() {
    this.nomineeDetails['nomineeInfo'].nomineeRelationship = this.jointHolderDetails.get('relationship').value;
  }
  getName() {
    this.nomineeDetails['nomineeInfo'].nomineeName =  this.jointHolderDetails.get('nomineeName').value;
  }
  checkType() {
    this.nomineeDetails['nomineeInfo'].nomineeType = this.jointHolderDetails.get('nomineeType').value;
  }
  dateChanged1() {
    this.nomineeDetails['nomineeInfo'].nomineeDob = this.jointHolderDetails.get('datePick').value;
    this.datePicker1.open();
  }
  dateChanged2(){
    this.datePicker2.open();
  }
  
  checkShare() {
    this.nomineeDetails['nomineeInfo'].nomineePercentage =this.jointHolderDetails.get('percentage').value;
  }

  nextPage() {
    // if(this.jointHolderDetails.get('nominee').value === 'Yes' ) {
    //   this.navCtrl.push('NomineeDetailsPage');
    //   this.jointHolderData['jointHolderInfo'].nominee = this.jointHolderDetails.get('nominee').value;
    // } else if(this.jointHolderDetails.get('nominee').value === 'No') {
    //   this.navCtrl.push('RegulatoryInfoPage');
    //   this.jointHolderData['jointHolderInfo'].nominee = this.jointHolderDetails.get('nominee').value;
    // } else {
      this.navCtrl.push('RegulatoryInfoPage');
    // }
    this.data.dataSet(this.jointHolderData);
    this.data.dataSet(this.nomineeDetails);
    console.log(this.data);
  }

  public addAnotherNominee() : void {
    this.showSecondNominee = true;
    this.jointHolderDetails.controls['percentage'].setValue('50');
    this.jointHolderDetails.controls['percentage2'].setValue('50');
  } 
}
