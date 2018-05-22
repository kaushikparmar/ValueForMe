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
  ngOnInit() {
    this.bankDetails = new FormGroup({
      accountNumber: new FormControl('', Validators.compose([Validators.required,Validators.minLength(14), Validators.maxLength(14)])),
      re_accountNumber : new FormControl('', [Validators.required,this.equalto('accountNumber')])
      });        
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
