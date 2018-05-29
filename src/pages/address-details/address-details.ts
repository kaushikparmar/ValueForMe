import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
// import { FormGroup, FormControl } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-address-details',
  templateUrl: 'address-details.html',
})
export class AddressDetailsPage {
  public defaultCity = "Mumbai";
  public permanentCity:any;
  public addressFill: any;
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
  public locationDetails = {
      'locationInfo' : 
            {
              'placeName' :'',
              'stateName' : '',
              'countryName' : '',
              'pincode': '',
              'cityName' : '',
              'address1' : '',
              'address2' : ''
            }
  }
  public location = [
    {
      'placeName' : 'Mumbai',
      'stateName' : 'Maharashtra',
      'countryName' : 'India',
      'pinCode' : '285643',
      'cityName' :'',
    },
    {
      'placeName' : 'Kanpur',
      'stateName' : 'Uttar Pradesh',
      'countryName' : 'India',
      'pinCode' : '456734',
      'cityName' :'',
    },
    {
      'placeName' : 'India Gate',
      'stateName' : 'Delhi',
      'countryName' : 'India',
      'pinCode' : '382220',
      'cityName' :'',
    }
  ];

  public permanentLocation = 
    {
      'permanentAddress1' : '',
      'permanentAddress2' : '',
      'permanentCountry' : '',
      'permanentPincode' : '',
      'permanentState' :'',
    };

  public permanentAddress1: any;
  public permanentAddress2: any;
  public permanentState: any;
  public permanentPincode: any;
  public permanentCountry: any = 'India';
  


  

  public place: any;
  public state: any;
  public country = "India";
  public pincode: any;
  public address1:any;
  public address2:any;
  constructor(
    public navCtrl: NavController,
    public _cdr: ChangeDetectorRef,
    public modalCtrl: ModalController, 
    public data:DataProvider,
    public navParams: NavParams) {
      
    }
    
    onPlaceChange(): void{
      
      for(let obj of this.location){
        if(obj.placeName === this.place){
          this.state = obj.stateName;
          this.country = obj.countryName;
          this.pincode = obj.pinCode;
          this.locationDetails['locationInfo'].placeName = this.place;
          this.locationDetails['locationInfo'].countryName = this.country;
          this.locationDetails['locationInfo'].pincode = this.pincode;
          this.locationDetails['locationInfo'].stateName = this.state;
        }
      }
        this._cdr.detectChanges();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressDetailsPage');
  }
  checkAddress1(address1) {
    this.locationDetails['locationInfo'].address1 = address1;
  }
  checkAddress2(address2) {
    this.locationDetails['locationInfo'].address2 = address2;
  }
  openModal(){
    let openModal=this.modalCtrl.create('AddressDetailsPopupPage');
    openModal.present();
    openModal.onDidDismiss( data => {
      if(data !== undefined){
        this.defaultCity = data;
        // this.location['indianAddress'].cityName = this.defaultCity;
        this.locationDetails['locationInfo'].cityName = this.defaultCity;
      }
    });
  }
  prefillAddress(isChecked) { 
    if(isChecked) {
      console.log(isChecked);
      this.permanentAddress1 = this.address1;
      this.permanentAddress2 = this.address2;
      this.permanentState = this.state;
      this.permanentPincode = this.pincode;
      this.permanentCity = this.defaultCity; 
    } else {
      this.permanentAddress1 = '';
      this.permanentAddress2 = '';
      this.permanentState = '';
      this.permanentPincode =''; 
    }
  }

  
  nextPage(){
    this.navCtrl.push('HoldingDetailsPage');
    this.data.dataSet(this.locationDetails);
    console.log(this.data);
  }
}
