import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  public progress: number = 0;
  public interval: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.interval = setInterval(()=>{
      if (this.interval !== undefined && this.progress === 100) {
        clearInterval(this.interval);
        this.navCtrl.setRoot('AddInvestorPage',null, {animate: true, animation: "transition-ios"});
      } 
      if (this.progress < 100) {
        this.progress++;
      }
      
    }, 20);
  }

  ionViewDidLeave(){
    
  }

}
