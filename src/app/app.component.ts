import { Component } from '@angular/core';
import { Platform, ToastController,Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'AddInvestorPage';

  constructor(private platform: Platform, 
    public toastCtrl: ToastController,
    public config: Config,
    private network: Network,private statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#53b548');
      this.splashScreen.hide();
      this.listenConnection();
 
    });
  }
//   private setCustomTransitions() {
//     this.config.setTransition('modal-scale-up-leave', ModalScaleUpLeaveTransition);
//     this.config.setTransition('modal-scale-up-enter', ModalScaleUpEnterTransition);
// }


  private listenConnection(): void {
    this.network.onDisconnect()
      .subscribe(() => {
        this.presentToast('Network Disconnected');
      });
      this.network.onConnect()
      .subscribe(() => {
        this.presentToast('Network Connected');
      });
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          this.presentToast('Wifi Connected');
        }
      }, 3000);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}

