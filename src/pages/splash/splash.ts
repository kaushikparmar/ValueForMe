import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage implements OnInit, OnDestroy {

  public progress: number = 0;
  public interval: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public splashScreen: SplashScreen
  ) {
  }

  ngOnInit() {
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.viewCtrl.dismiss();
      this.navCtrl.setRoot('AddInvestorPage');
    }, 4000);
    this.interval = setInterval(()=>{
      if (this.progress < 100) {
        this.progress++;
      }
      if (this.progress === 100) {
        // this.navCtrl.setRoot('AddInvestorPage');
        clearInterval(this.interval);
      }
    }, 40);
  }

  ngOnDestroy(){
    // if (this.interval) {
    //   clearInterval(this.interval);
    //   this.interval = undefined;
    // } 
  }

}
