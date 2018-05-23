import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
// import { DirectivesModule } from '../../directives/directives.module';

@IonicPage()
@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage implements OnInit {
  public defaultBank = "ICICI Bank LTD.";
  public accountNo: any  = "412739865024";
  public reAccountNo: any  = "412739865024";
  public selectOptions = {
    title: 'Resident Outside India'
  };
  bankDetails: FormGroup;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    // public cdRef :ChangeDetectorRef,  
    public navParams: NavParams) {
      
  }

  public accountDetails:any = [
    {
      'ifsc' : '23405394303',
      'branchName' : 'MUMBAI-SERUL',
      'branchAddress' : 'Coral Crest Co-Op Soc, Unit 14, Plot No3, Sector 23, Nerul East- 4000706.' 
     }
  ];
  ifsc: any;
  branchName : any;
  branchAddress : any;
  checkIfsc: boolean = false;
  showError: boolean = false;
  ngOnInit() {
    this.bankDetails = new FormGroup({
      accountNumber: new FormControl('', [Validators.required,Validators.maxLength(15)]),
      re_accountNumber : new FormControl('', [Validators.required,this.equalto('accountNumber')]),
      ifsc: new FormControl(''),
      branchName: new FormControl(''),
      branchAddress: new FormControl('')
    });        
  }
  checkIFSC(){
        this.checkIfsc = true;
        let ifsc = this.bankDetails.get('ifsc').value;
        setTimeout(() => {
          this.checkIfsc = false;
        },700);
        this.showError = false;
      for (let obj of this.accountDetails){
          if(obj.ifsc === ifsc){
            this.bankDetails.controls['branchName'].setValue(obj.branchName);
            this.bankDetails.controls['branchAddress'].setValue(obj.branchAddress);
            setTimeout(() => {
              this.showError =false;
            },700);
          } else { 
            this.bankDetails.controls['branchName'].setValue('');
            this.bankDetails.controls['branchAddress'].setValue('');
            setTimeout(() => {
              this.showError = true;
            },700);
          }
        }
  }
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    let input = control.value;
    let isValid=control.root.value[field_name]==input
      if(!isValid) 
        return { 'equalTo': {isValid} }
        else 
        return null;
      };
    }
 checkLimit(max): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let input = control.value;
    console.log(input);
    let isValid=input.value && (isNaN(input.value) || input.value > max);
    console.log(isValid);
    if(!isValid) 
      return { 'range': {isValid} }
      else 
      return null;
    };
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BankDetailsPage');
  }
  openModal(){
    let openModal=this.modalCtrl.create('BankDetailsPopupPage');
    openModal.present();
    openModal.onDidDismiss( data => {
      if(data !== undefined){
        this.defaultBank = data;
      }
    });
  }
  // checkAccount(value){
  //   this.cdRef.detectChanges();
  //   this.accountNo = value.length > 14 ? value.substring(0,14) : value;
  // }
  nextPage(){
    this.navCtrl.push('YourDetailsPage');
  }
}
