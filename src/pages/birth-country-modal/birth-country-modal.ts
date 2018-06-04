import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-birth-country-modal',
  templateUrl: 'birth-country-modal.html',
})
export class BirthCountryModalPage {
  public searchString: string;
  public cityDetails = [
    {
      'cityName' : 'Australia',
    },
    {
      'cityName' : 'India',
    },
    {
      'cityName' : 'Afghanistan',
    },
    {
      'cityName' : 'Japan',
    },
    {
      'cityName' : 'China',
    },
    {
      'cityName' : 'Brazil',
    },
    {
      'cityName' : 'Netherland',
    },
    {
      'cityName' : 'Finland',
    },
    {
      'cityName' : 'Singapore'
    },
    {
      'cityName' : 'Hongkong',
    },
    {
      'cityName' : 'Nigeria',
    },
    {
      'cityName' : 'South Africa',
    },
    
  ]

  public topCityList = [];
  constructor(
    public navCtrl: NavController,
    public renderer: Renderer,
    public viewCtrl: ViewController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.topCityList = JSON.parse(JSON.stringify(this.cityDetails));
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'selectPopupModal', true);
  }


  public selectCity(city): void {
    this.viewCtrl.dismiss(city);
  }
  public onSearch(searchStr): void {
    this.topCityList = this.cityDetails.filter((obj) => {
      return obj.cityName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;
    })
  }
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
