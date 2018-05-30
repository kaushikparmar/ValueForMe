import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {
  public currentMember: any;
  public pdfUrl: any;
  public familyName: any;
  public userData:any  = [];
  public usersList: any = [
    {
      'name': 'Rohit Prasad',
      'title': "Mr.",
      'familyName': 'Rohit Family',
      'mobile': undefined,
      'contact': undefined,
      'pan_no': 'ABCDE1234A',
      'aadhar_no': '111122223333',
      'email': undefined,
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'name': 'Pradip Malpute',
      'title': "Mr.",
      'familyName': 'Pradip Family',
      'mobile': undefined,
      'contact': undefined,
      'pan_no': 'ABCDE1234B',
      'aadhar_no': '111122223333',
      'email': undefined,
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'familyName': 'Ravindra Family',
      'title': "Mr.",
      'mobile': undefined,
      'contact': undefined,
      'pan_no': 'ABCDE1234C',
      'aadhar_no': '111122223333',
      'email': undefined,
      'name': 'Ravindra Salukhe',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'name': 'Kaushik Parmar',
      'title': "Mr.",
      'familyName': 'Kaushik Family',
      'mobile': undefined,
      'contact': undefined,
      'pan_no': 'ABCDE1234D',
      'aadhar_no': '111122223333',
      'email': undefined,
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'familyName': 'Satish Family',
      'title': "Mr.",
      'mobile': undefined,
      'contact': undefined,
      'pan_no': 'ABCDE1234E',
      'aadhar_no': '111122223333',
      'email': undefined,
      'name': 'Satish Gaurav',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    }
  ];

  constructor(
    private storage: Storage
  ) {
  }

  public filterName(searchName) {
    return this.usersList.filter((obj) => {
      return obj.familyName.toLowerCase().indexOf(searchName.toLowerCase()) > -1;
    })
  }

  public filterPanData(searchPan) {
    return this.usersList.filter((obj) => {
      return obj.pan_no.toLowerCase() === searchPan.toLowerCase();
    })
  }

  public set(currentMemberData): void { 
    this.currentMember = JSON.parse(JSON.stringify(currentMemberData));
  }
  public get(): void { 
    return this.currentMember;
  }

  public dataSet(curentPage): void {
    this.userData.push(curentPage);
  }
  
  
    // To hold user data and configuration
    private userPreferences: any = {
      
  };

  

  /**
   * @param key : Getter returns user data as passed key in argument
   */
  public getter(key: string): any {
      return this.userPreferences[key];
  }

  /**
   * @param key : Removed user data as passed key in argument
   */
  public remove(key: string): any {
      delete this.userPreferences[key];
      this.storage.set('userPreferences', JSON.parse(JSON.stringify(this.userPreferences)));
  }

  /**
   * @param key : Property nane sets user data with a named key as passed key in argument
   * @param data : Setter sets user data on passed key in argument
   */
  public setter(key: string, data: any): void {
      this.userPreferences[key] = data;
      // Update userPreferences in app storage
      this.storage.set('userPreferences', JSON.parse(JSON.stringify(this.userPreferences)));
  }

  /**
   * @param userPreferences : Property sets user preferences
   */
  public setUserPreferenceFromStorage(userPreferences: any): void {
      this.userPreferences = userPreferences;
  }
/**
 * set pdf url
 */
public setPdfUrl(url) {
    this.pdfUrl = url;
}
public getPdfUrl() { 
  return this.pdfUrl;
}

}
