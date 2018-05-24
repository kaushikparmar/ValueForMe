import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, ViewController,
Platform } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Camera } from '@ionic-native/camera';
import { CameraProvider } from '../../providers/camera/camera';


@IonicPage()
@Component({
  selector: 'page-investor-info',
  templateUrl: 'investor-info.html',
})
export class InvestorInfoPage {
  @ViewChild('datePicker') datePicker;
  chosenPicture: any = './assets/imgs/cancel-cheque.png';
  public selectOptions = {
    title: 'Marital Status'
  };
  public selectOptions1 = {
    title: 'Select Gender'
  };
  public selectOptions2 = {
    title: 'Select Investment Type'
  };
  public currentMember: any;
  public investorType: any;
  public uploadedData: any = {};
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    private camera: Camera,
    // private data: data,
    public actionsheetCtrl: ActionSheetController,
    public cameraProvider: CameraProvider,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public data: DataProvider, 
    private diagnostic: Diagnostic,
    public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestorInfoPage');
    let profilePicture = this.data.getter('profilePicture');
    if (profilePicture !== undefined) {
      this.chosenPicture = profilePicture;
    }

    this.currentMember = this.data.get();
    if(this.currentMember.isNRI !== undefined && this.currentMember.isNRI === true){
      this.investorType = 'NRI';
    } else {
      this.investorType = 'Individual';
    }
    
  }
  dateChanged() {
    this.datePicker.open();
  }

  nextPage(){
    if(this.currentMember.isNRI !== undefined && this.currentMember.isNRI === true){
      this.navCtrl.push('CorrespondenceAddressPage');
    } else {
      this.navCtrl.push('AddressDetailsPage');
    }
    
  }

  public getCameraPermission(): void {
    // get camera
    this.diagnostic.isCameraAuthorized(true).then(
      (data) => {
        console.log('camera permission', data);
        if (!data) {
          this.diagnostic.requestCameraAuthorization(true).then(
            (auth) => {
              console.log('auth', auth);
            }
          );
        }
      }
    )
  }
  
  public  changePicture() {
    this.getCameraPermission();
    const actionsheet = this.actionsheetCtrl.create({
      title: 'upload picture',
      buttons: [
        {
          text: 'camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: !this.platform.is('ios') ? 'gallery' : 'camera roll',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'destructive',
          handler: () => {
            console.log('the user has cancelled the interaction.');
          }
        }
      ]
    });
    return actionsheet.present();
  }


  takePicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    this.cameraProvider.getPictureFromCamera().then(picture => {
      console.log('picture', picture);
      if (picture) {
        this.chosenPicture = picture;
        this.data.setter('profilePicture', picture);
      }
      loading.dismiss();
    }, error => {
      alert(error);
    }).catch(err => {
      console.log('catch', err);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create();

    loading.present();
    this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      console.log('picture', picture);
      if (picture) {
        this.chosenPicture = picture;
        this.data.setter('profilePicture', picture);
      }
      loading.dismiss();
    }, error => {
      console.log(error);
    });
  }


}
