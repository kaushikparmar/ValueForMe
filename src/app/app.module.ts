import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicErrorHandler, IonicModule, Config } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DataProvider } from '../providers/data/data';
// import { DocumentViewer } from '@ionic-native/document-viewer';
import { CameraProvider } from '../providers/camera/camera';
import { SharedModule } from './shared.module';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Network } from '@ionic-native/network';
import { ModalScaleEnterTransition } from '../directives/scale-up-enter.transition';
import { ModalScaleLeaveTransition } from '../directives/scale-up-leave.transition';
// import { FileOpener } from '@ionic-native/file-opener';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    SharedModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '',
      backButtonIcon: 'ios-arrow-back',
      scrollAssist: false,
      autoFocusAssist: false,
      pageTransition: 'ios-transition',
      platforms: {
        android: {
          scollPadding: true,
        },
        ios: {
          inputBlurring: true,
          scrollAssist: false,
          scollPadding: false
        }
      },
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // DocumentViewer,
    Diagnostic,
    File,
    FileTransfer,
    LocalNotifications,
    FileTransferObject,
    Network,
    // FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Camera,
    CameraProvider
  ],
  exports: [
  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
}

private setCustomTransitions() {
    
    this.config.setTransition('modal-scale-up-enter', ModalScaleEnterTransition);
    this.config.setTransition('modal-scale-up-leave', ModalScaleLeaveTransition);
}
}
