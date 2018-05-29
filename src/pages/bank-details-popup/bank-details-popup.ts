import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bank-details-popup',
  templateUrl: 'bank-details-popup.html',
})
export class BankDetailsPopupPage {
  public showBank : boolean = false;
  public searchString: string;
  public bankDetails = [
    {
      'bankName' : 'Axis Bank',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    {
      'bankName' : 'Bank of Baroda',
      'bankImg' : './assets/imgs/bank-icons/bob.png'
    },
    {
      'bankName' : 'HDFC Bank',
      'bankImg' : './assets/imgs/bank-icons/hdfc.png'
    },
    {
      'bankName' : 'ICICI Bank',
      'bankImg' : './assets/imgs/bank-icons/icici.png'
    },
    {
      'bankName' : 'Indian Bank',
      'bankImg' : './assets/imgs/bank-icons/indian.png'
    },
    {
      'bankName' : 'SBI',
      'bankImg' : './assets/imgs/bank-icons/sbi.png'
    },
    {
      'bankName' : 'Dena Bank',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    {
      'bankName' : 'CB1',
      'bankImg' : './assets/imgs/bank-icons/indian.png'
    },
    {
      'bankName' : 'SYNDICATE BANK',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    {
      'bankName' : 'PNB',
      'bankImg' : './assets/imgs/bank-icons/hdfc.png'
    },
    {
      'bankName' : 'UNION BANK OF INDIA',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    {
      'bankName' : 'DENA BANK',
      'bankImg' : './assets/imgs/bank-icons/bob.png'
    },
    {
      'bankName' : 'CANARA BANK',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    {
      'bankName' : 'IDBI BANK LTD.',
      'bankImg' : './assets/imgs/bank-icons/axis.png'
    },
    
  ]
  public topBankList = [];
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    }
  
  
  
  ionViewDidLoad() {
    this.topBankList;
    for (let i=0;i<6;i++) {
      this.topBankList.push(this.bankDetails[i]);
    }
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public selectBank(bank): void {
    this.viewCtrl.dismiss(bank);
  }

  public onSearch(searchStr): void {
    this.bankDetails.filter(()=>{});
    this.topBankList = this.bankDetails.filter((obj) => {
      return obj.bankName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;
    })
  }

  public showAll() : void{
    this.showBank = !this.showBank;
    this.topBankList = JSON.parse(JSON.stringify(this.bankDetails));
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }


}
