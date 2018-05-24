import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-correspondence-address',
  templateUrl: 'correspondence-address.html',
})
export class CorrespondenceAddressPage {
  public defaultCity = "Mumbai";
  public selectOptions = {
    title: 'Select Birth Place'
  };
  public selectOptions1 = {
    title: 'Select City'
  };
  public selectOptions2 = {
    title: 'Select State'
  };
  public selectOptions3 = {
    title: 'Select Country'
  };
  public selectOptions4 = {
    title: 'Select Title'
  };
  public location = [
    {
      'placeName' : 'Mumbai',
      'stateName' : 'Maharashtra',
      'countryName' : 'India',
      'pinCode' : '285643'
    },
    {
      'placeName' : 'Kanpur',
      'stateName' : 'Uttar Pradesh',
      'countryName' : 'India',
      'pinCode' : '456734'
    },
    {
      'placeName' : 'Bavla',
      'stateName' : 'Gujarat',
      'countryName' : 'India',
      'pinCode' : '382220'
    }
  ];
  public place: any;
  public state: any;
  public country = "India";
  public pincode: any;
  
  constructor(
    public navCtrl: NavController,
    public _cdr: ChangeDetectorRef,
    public modalCtrl: ModalController, 
    public navParams: NavParams) {
      
    }
    
    onPlaceChange(): void{
      
      for(let obj of this.location){
        if(obj.placeName === this.place){
          this.state = obj.stateName;
          this.country = obj.countryName;
          this.pincode = obj.pinCode;
        }
      }
        this._cdr.detectChanges();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrespondenceAddressPage');
  }
  openModal(){
    let openModal=this.modalCtrl.create('AddressDetailsPopupPage');
    openModal.present();
    openModal.onDidDismiss( data => {
      if(data !== undefined){
        this.defaultCity = data;
      }
    });
  }


  nextPage(){
    this.navCtrl.push('HoldingDetailsPage');
  }
}
