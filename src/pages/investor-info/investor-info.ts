import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, NavParams, LoadingController, ActionSheetController, ViewController,
  Platform, ToastController
} from 'ionic-angular';
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
  @ViewChild('genderSelect') selectGender;
  @ViewChild('maritalSelect') selectMarital;
  @ViewChild('investorSelect') selectInvestor;
  
  chosenPicture: any;
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
  public uploadedData: any = {};

  public marital: string;
  public mothername: string;
  public dob: any;
  public gender: any;
  public investorType: any;

  public investoInfoPage =
    {
      'investorInfo':
        {
          'maritalStatus': '',
          'motherName': '',
          'dob': '',
          'gender': '',
          'investorType': '',
        }
    }
    ;

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
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

  // public checkMarital(status: any): void {
  //   if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.maritalStatus !== undefined) {
  //     this.investoInfoPage.investorInfo.maritalStatus = status;
  //   }
  // }
  public setName(name: any): void {
    if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.motherName !== undefined) {
      this.investoInfoPage.investorInfo.motherName = name;
    }
    
  }
  maritalClose(event) {
    this.selectMarital.close();
    this.marital = event;  
    if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.maritalStatus !== undefined) {
      this.investoInfoPage.investorInfo.maritalStatus = event;
    }
  }
  genderClose(event){
    this.selectGender.close();
    this.gender = event;
    if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.gender !== undefined) {
      this.investoInfoPage.investorInfo.gender = event;
    }
  }
  // public checkGender(gender): void {
  //   if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.gender !== undefined) {
  //     this.investoInfoPage.investorInfo.gender = gender;
  //   }
  // }

  // public checkInvestor(investor): void {
  //   if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.investorType !== undefined) {
  //     this.investoInfoPage.investorInfo.investorType = investor;
  //   }
  // }
  investorClose(event){
    this.selectInvestor.close();
    this.investorType = event;
    if (this.investoInfoPage !== undefined && this.investoInfoPage.investorInfo !== undefined && this.investoInfoPage.investorInfo.gender !== undefined) {
      this.investoInfoPage.investorInfo.investorType = event;
    }
  }

  ionViewDidLoad() {
    let profilePicture = this.data.getter('profilePicture');
    if (profilePicture !== undefined) {
      this.chosenPicture = profilePicture;
    }
    // this.data.userData.push(this.investoInfoPage);
    // console.log(this.data.userData);
    this.currentMember = this.data.get();
    if (this.currentMember.isNRI !== undefined && this.currentMember.isNRI === true) {
      this.investorType = 'NRI';
      this.investoInfoPage.investorInfo.investorType = this.investorType;
    } else {
      this.investorType = 'Individual';
      this.investoInfoPage.investorInfo.investorType = this.investorType;
    }

  }

  public dateChanged(selectedDate) {
    this.datePicker.open();
    this.investoInfoPage.investorInfo.dob = selectedDate;
  }


  nextPage() {
    this.data.dataSet(this.investoInfoPage);
    console.log(this.data);
    if (this.currentMember.isNRI !== undefined && this.currentMember.isNRI === true) {
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

  public changePicture() {
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
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    // this.cameraProvider.getPictureFromCamera().then(picture => {
    //   console.log('picture', picture);
    //   if (picture) {
    //     this.chosenPicture = picture;
    //     this.data.setter('profilePicture', picture);
    //   }
    //   loading.dismiss();
    // }, error => {
    //   alert(error);
    // }).catch(err => {
    //   console.log('catch', err);
    // });
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 175,
      targetHeight: 120
    }).then((imageData) => {
      // imageData is a base64 encoded string
      if (imageData !== 'No Image Selected') {
        this.chosenPicture = "data:image/jpeg;base64," + imageData;
        console.log(this.chosenPicture, "chosenPictruer");
        this.data.setter('profilePicture', this.chosenPicture);
        this.presentToast("Image uploaded successfully");
        console.log(this.data, "image data");
      }
      console.log(imageData,"imageData");
      if (imageData === 'No Image Selected') {
        this.presentToast("Image upload error");
        loading.dismiss();
      }

      loading.dismiss();
    }, (err) => {
      console.log(err);
    });
  }

  getPicture() {
    const loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    this.cameraProvider.getPictureFromPhotoLibrary().then(picture => {
      console.log('picture', picture);
      if (picture !== 'No Image Selected') {
        this.chosenPicture = picture;
        console.log(picture, "picture");
        this.data.setter('profilePicture', picture);
        this.presentToast("Image uploaded successfully");
      }
      if (picture === 'No Image Selected') {
        this.presentToast("Image upload error");
      }

      loading.dismiss();

    }, error => {

    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'center'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  
  dismiss() {
      if(this.chosenPicture !== undefined){
          this.chosenPicture = '';
      }
  }
}
