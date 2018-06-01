import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage implements OnInit {
  @ViewChild('outsideInida1') outsideInida;
  @ViewChild('insideIndia1') insideIndia;
  public defaultBank = "ICICI Bank LTD.";
  public accountNo: any = "";
  public reAccountNo: any = "";
  public selectOptions = {
    title: 'Resident Outside India'
  };
  public checkInvestor: any;
  public showNRIAccount: boolean = false;
  public showIndiaAccount: boolean = true;
  public properIfsc: boolean = false;
  bankDetails: FormGroup;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider,
    private http: HttpClient,
    // public cdRef :ChangeDetectorRef,  
    public navParams: NavParams) {
      this.backAccountDetails['bankAccountInfo'].bankName = this.defaultBank;
  }


  public backAccountDetails = {
    'bankAccountInfo': {
      'bankName': '',
      'ifsc': '',
      'branchName': '',
      'branchAddress': '',
      'residence': '',
      'accountNo': '',
      'accountType': ''
    }
  }
  public selectOptions2 = {
    title: 'Select Account Type'
  };
  public accountDetails: any = [
    {
      'ifsc': 'ICIC0001238',
      'branchName': 'MUMBAI-SERUL',
      'branchAddress': 'Coral Crest Co-Op Soc, Unit 14, Plot No3, Sector 23, Nerul East- 4000706.'
    }
  ];
  ifsc: any;
  branchName: any;
  branchAddress: any;
  checkIfsc: boolean = false;
  showError: boolean = false;
  ngOnInit() {
    this.bankDetails = new FormGroup({
      accountNumber: new FormControl('', [Validators.required, Validators.maxLength(14),Validators.minLength(14)]),
      re_accountNumber: new FormControl('', [Validators.required, this.equalto('accountNumber')]),
      ifsc: new FormControl(''),
      branchName: new FormControl(''),
      branchAddress: new FormControl(''),
      outsideInida: new FormControl(''),
      insideIndia: new FormControl(''),
      bank: new FormControl(''),
    });
  }
  checkIFSC() {
    this.checkIfsc = true;
    let ifsc = this.bankDetails.get('ifsc').value;
    setTimeout(() => {
      this.checkIfsc = false;
    }, 700);
    this.showError = false;
    for (let obj of this.accountDetails) {
      if (obj.ifsc === ifsc) {
        let branchname = this.bankDetails.controls['branchName'].setValue(obj.branchName);
        let branchAddress = this.bankDetails.controls['branchAddress'].setValue(obj.branchAddress);
        setTimeout(() => {
          this.showError = false;
        }, 700);
        this.properIfsc = true;
        this.backAccountDetails['bankAccountInfo'].ifsc = ifsc;

      } else {
        this.bankDetails.controls['branchName'].setValue('');
        this.bankDetails.controls['branchAddress'].setValue('');
        setTimeout(() => {
          this.showError = true;
        }, 700);
        this.properIfsc = false;
      }
      this.backAccountDetails['bankAccountInfo'].branchName = this.bankDetails.get('branchName').value;
      this.backAccountDetails['bankAccountInfo'].branchAddress = this.bankDetails.get('branchAddress').value;
    }
  }
  branchname() {
    this.backAccountDetails['bankAccountInfo'].branchName = this.bankDetails.get('branchName').value;
  }
  branchaddress() {
    this.backAccountDetails['bankAccountInfo'].branchAddress = this.bankDetails.get('branchAddress').value;
  }
  checkResident(event) {
    this.backAccountDetails['bankAccountInfo'].residence = event;
    this.bankDetails.controls['outsideInida'].setValue(event);
    this.outsideInida.close();
  }
  checkAccount() {
    this.backAccountDetails['bankAccountInfo'].accountNo = this.bankDetails.get('accountNumber').value;
  }
  checkInternalResident(event) {
    this.backAccountDetails['bankAccountInfo'].accountType = event;
    this.bankDetails.controls['insideIndia'].setValue(event);
    this.insideIndia.close();
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
  ionViewDidLoad() {
    this.checkInvestor = this.data.get();
    if (this.checkInvestor.isNRI !== undefined && this.checkInvestor.isNRI === true) {
      this.showIndiaAccount = false;
      this.showNRIAccount = true;
      // this.backAccountDetails['bankAccountInfo'].accountType= 
    } else {
      this.showIndiaAccount = true;
      this.showNRIAccount = false;
      // this.backAccountDetails['bankAccountInfo'].accountType= 

    }
    console.log('ionViewDidLoad BankDetailsPage');
  }


  openModal() {
    let openModal = this.modalCtrl.create('BankDetailsPopupPage');
    openModal.present();
    openModal.onDidDismiss(data => {
      if (data !== undefined) {
        this.defaultBank = data;
        this.backAccountDetails['bankAccountInfo'].bankName = this.defaultBank;
      }
    });
  }
  // checkAccount(value){
  //   this.cdRef.detectChanges();
  //   this.accountNo = value.length > 14 ? value.substring(0,14) : value;
  // }
  nextPage() {
    this.navCtrl.push('YourDetailsPage');
    this.data.dataSet(this.backAccountDetails);
    let sendData = this.data['userData'];
    sendData.push({'signature':this.data.getter('profilePicture')});
    console.log(sendData);
    
    // http://valuefy.brainvire.net
    this.http.post('http://valuefy.brainvire.net/valufy-data', sendData).subscribe(
        (success) => {
          console.log('setPdfUrl', success);
          this.data.setPdfUrl(success['url']);
        },
        (error) => {

        }
      );

  }
}
