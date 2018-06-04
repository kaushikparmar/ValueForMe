import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-correspondence-address',
  templateUrl: 'correspondence-address.html',
})
export class CorrespondenceAddressPage {
  @ViewChild('residentialType') residentialType;
  public defaultIndianCity = "";
  public defaultOverseasCity = "";
  public residential:any;
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
  public selectOptions5 = {
    title: 'Select Resident Type'
  };
  
  public overSeasAddress1: string;
  public overSeasAddress2: string;
  public indianAddress1: string;
  public indianAddress2: string;
  public overseasCountryName: string;
  public addressDetails = {
      'overseasAddress':
        {
          'address1': '',
          'address2': '',
          'city':'',
          'placeName': '',
          'stateName': '',
          'pincode': '',
          'countryName': '',
        },
      'indianAddress':
        {
          'address1': '',
          'address2': '',
          'placeName': '',
          'city':'',
          'stateName': '',
          'pincode': '',
          'countryName': 'India',
        }
    };

  public place: any;
  public overseasState: any;
  public country = "India";
  public overseasPincode: any;
  public indiaPincode: any;
  public indianState: any;
  public overseasCity:any;
  constructor(
    public navCtrl: NavController,
    public _cdr: ChangeDetectorRef,
    public modalCtrl: ModalController,
    public data:DataProvider,
    public navParams: NavParams) {

  }
  public overseasAddress1(overSeasAddress1): void {
    this.addressDetails['overseasAddress'].address1 = overSeasAddress1;
  }
  public overseasAddress2(overSeasAddress2): void {
    this.addressDetails['overseasAddress'].address2 = overSeasAddress2;
  }
  public indiaAddress1(indianAddress1): void {
    this.addressDetails['indianAddress'].address1 = indianAddress1;
  }
  public indiaAddress2(indianAddress2): void {
    this.addressDetails['indianAddress'].address2 = indianAddress2;
  }
  
  public overSeasPincode(pincode): void {
    this.addressDetails['overseasAddress'].pincode = pincode;
  }
  // onPlaceChangeOverseas(): void {

  //   for (let obj of this.overSeasLocation) {
  //     if (obj.placeName === this.place) {
  //       this.overseasState = obj.stateName;
  //       this.country = obj.countryName;
  //       this.overseasPincode = obj.pinCode;
  //       this.addressDetails['overseasAddress'].placeName = this.place;
  //       this.addressDetails['overseasAddress'].stateName = this.overseasState;
  //       this.addressDetails['overseasAddress'].pincode = this.overseasPincode;

  //     }
  //   }
  //   this._cdr.detectChanges();
  // }

  // onStateChange(state){
  //   // this.indianState = state;
  //   this.addressDetails['indianAddress'].stateName = state;
  // }
  onInput(pincode){
    // this.indiaPincode = pincode;
    this.addressDetails['indianAddress'].pincode = pincode;
  }
  overseasCountry(country){
    this.addressDetails['overseasAddress'].countryName= country;
  }
  changeOverseasState(state){
    this.addressDetails['overseasAddress'].stateName= state;
  }
  changeOverseasCity(city){
    this.addressDetails['overseasAddress'].city= city;
  }
  checkResidential(event){
    this.residential = event;
    this.residentialType.close();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CorrespondenceAddressPage');
  }
  openIndianModal() {
    let openModal1 = this.modalCtrl.create('AddressDetailsPopupPage',{},{
      showBackdrop: false,
      enableBackdropDismiss: false,
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });
    openModal1.present();
    openModal1.onDidDismiss(data => {
      if (data !== undefined) {
        this.defaultIndianCity = data; 
        this.addressDetails['indianAddress'].city = this.defaultIndianCity;
      }
    });
  }

  openStateModal(state) {
    let openModal=this.modalCtrl.create('StateModalPage',{},{
      showBackdrop: false,
      enableBackdropDismiss: false,
      enterAnimation: 'modal-scale-up-enter',
      leaveAnimation: 'modal-scale-up-leave'
    });
    openModal.present();
    openModal.onDidDismiss( data => {
      if(data !== undefined){
        this.indianState = data;
        // this.location['indianAddress'].cityName = this.defaultCity;
        this.addressDetails['indianAddress'].stateName = this.indianState;
      }
    });
  }

  // openOverseasModal() {
  //   let openModal2 = this.modalCtrl.create('AddressDetailsPopupPage');
  //   openModal2.present();
  //   openModal2.onDidDismiss(data => {
  //     if (data !== undefined) {
  //       this.defaultOverseasCity = data;
  //       this.addressDetails['overseasAddress'].city = this.defaultOverseasCity;
        
  //     }
  //   });
  // }
  onPlaceChangeOverseas(place) {
    this.addressDetails['overseasAddress'].placeName= place;
  }


  nextPage() {
    this.navCtrl.push('HoldingDetailsPage');
    this.data.dataSet(this.addressDetails);
    console.log(this.data);
  }
}
