import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-state-modal',
  templateUrl: 'state-modal.html',
})
export class StateModalPage {
  public searchString: string;
  public cityDetails = [
    {
      'cityName' : 'Gujarat',
    },
    {
      'cityName' : 'Maharashtra',
    },
    {
      'cityName' : 'Rajasthan',
    },
    {
      'cityName' : 'Madhya Pradesh',
    },
    {
      'cityName' : 'Arunachal Pradesh',
    },
    {
      'cityName' : 'Chattisgarh',
    },
    {
      'cityName' : 'Uttar Pradesh',
    },
    {
      'cityName' : 'Himachal Pradesh',
    },
    {
      'cityName' : 'Punjab'
    },
    {
      'cityName' : 'Haryana',
    },
    {
      'cityName' : 'Bihar',
    },
    {
      'cityName' : 'West Bengal',
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
