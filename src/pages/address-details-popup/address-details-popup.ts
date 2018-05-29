import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-address-details-popup',
  templateUrl: 'address-details-popup.html',
})
export class AddressDetailsPopupPage {
  public showCity : boolean = false;
  public searchString: string;
  public cityDetails = [
    {
      'cityName' : 'Mumbai',
      'cityImg' : './assets/imgs/city-icons/mumbai.png'
    },
    {
      'cityName' : 'Delhi',
      'cityImg' : './assets/imgs/city-icons/delhi.png'
    },
    {
      'cityName' : 'Bengaluru',
      'cityImg' : './assets/imgs/city-icons/bengaluru.png'
    },
    {
      'cityName' : 'Hyderabad',
      'cityImg' : './assets/imgs/city-icons/hyderabad.png'
    },
    {
      'cityName' : 'Ahmedabad',
      'cityImg' : './assets/imgs/city-icons/ahmedabad.png'
    },
    {
      'cityName' : 'Chennai',
      'cityImg' : './assets/imgs/city-icons/chennai.png'
    },
    {
      'cityName' : 'Kanpur',
      'cityImg' : './assets/imgs/city-icons/mumbai.png'
    },
    {
      'cityName' : 'Shimla',
      'cityImg' : './assets/imgs/city-icons/delhi.png'
    },
    {
      'cityName' : 'Jaipur',
      'cityImg' : './assets/imgs/city-icons/bengaluru.png'
    },
    {
      'cityName' : 'Indore',
      'cityImg' : './assets/imgs/city-icons/hyderabad.png'
    },
    {
      'cityName' : 'Pune',
      'cityImg' : './assets/imgs/city-icons/ahmedabad.png'
    },
    {
      'cityName' : 'Jabalpur',
      'cityImg' : './assets/imgs/city-icons/chennai.png'
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
    this.topCityList;
    for (let i=0;i<6;i++) {
      this.topCityList.push(this.cityDetails[i]);
    }
    this.renderer.setElementClass(this.viewCtrl.pageRef().nativeElement, 'otpModal', true);
  }
  public selectCity(city): void {
    this.viewCtrl.dismiss(city);
  }
  public onSearch(searchStr): void {
    this.cityDetails.filter(()=>{});
    this.topCityList = this.cityDetails.filter((obj) => {
      return obj.cityName.toLowerCase().indexOf(searchStr.toLowerCase()) > -1;
    })
  }

  public showAll() : void{
    this.showCity = !this.showCity;
    this.topCityList = JSON.parse(JSON.stringify(this.cityDetails));
  }
  
  public dismiss(): void {
    this.viewCtrl.dismiss();
  }

}
