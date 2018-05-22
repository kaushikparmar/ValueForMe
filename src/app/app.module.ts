import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
// import { FileTransfer } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { DataProvider } from '../providers/data/data';
import { DocumentViewer } from '@ionic-native/document-viewer';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
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
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // File,
    // FileTransfer,
    DocumentViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
