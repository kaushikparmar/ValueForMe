import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Diagnostic } from '@ionic-native/diagnostic';
// import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { CameraProvider } from '../providers/camera/camera';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
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
    // HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DocumentViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Camera,
    Diagnostic,
    CameraProvider
  ]
})
export class AppModule {}
