import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-birth-place-modal',
  templateUrl: 'birth-place-modal.html',
})
export class BirthPlaceModalPage {
  public searchString: string;
  public cityDetails = [
    {
      'cityName' : 'Ahmedabad',
    },
    {
      'cityName' : 'Pune',
    },
    {
      'cityName' : 'Jaipur',
    },
    {
      'cityName' : 'Jabaplpur',
    },
    {
      'cityName' : 'Indore',
    },
    {
      'cityName' : 'Raipur',
    },
    {
      'cityName' : 'Kanpur',
    },
    {
      'cityName' : 'Shimla',
    },
    {
      'cityName' : 'Surat'
    },
    {
      'cityName' : 'Varanasi',
    },
    {
      'cityName' : 'Patna',
    },
    {
      'cityName' : 'Kolkata',
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
