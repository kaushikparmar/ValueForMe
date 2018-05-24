import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {
  public currentMember: any;

  public familyName: any;
  public usersList: any = [
    {
      'name': 'Rohit Prasad',
      'title': "Mr.",
      'familyName': 'Rohit Family',
      'mobile': '9022905438',
      'contact': '0265456743',
      'pan_no': 'ABCDEF123456',
      'aadhar_no': 'ABCDEF123456',
      'email': 'rohit.prasad@gmail.com',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'name': 'Pradip Malpute',
      'title': "Mr.",
      'familyName': 'Pradip Family',
      'mobile': '9022904438',
      'contact': '0265456743',
      'pan_no': 'ABCDEF456789',
      'aadhar_no': 'ABCDEF123456',
      'email': 'pradip.malpute@gmail.com',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'familyName': 'Ravindra Family',
      'title': "Mr.",
      'mobile': '9022105438',
      'contact': '0265456743',
      'pan_no': 'ABCDEF546454',
      'aadhar_no': 'ABCDEF123456',
      'email': 'ravindra.salukhe@gmail.com',
      'name': 'Ravindra Salukhe',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'name': 'Kaushik Parmar',
      'title': "Mr.",
      'familyName': 'Kaushik Family',
      'mobile': '9022305438',
      'contact': '0265456743',
      'pan_no': 'ABCDEF491020',
      'aadhar_no': 'ABCDEF123456',
      'email': 'kaushik.parmar@gmail.com',
      'isNRI': false,
      'countryCode': '+91',
      'isNewMember': false
    },
    {
      'familyName': 'Satish Family',
      'title': "Mr.",
      'mobile': '9025405438',
      'contact': '0265456743',
      'pan_no': 'ABCDEF491023',
      'aadhar_no': 'ABCDEF123456',
      'email': 'satish.gaurav@gmail.com',
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
    return this.usersList.filter((panNo) => {
      return panNo.value.toLowerCase() === searchPan.toLowerCase();
    })
  }

  public set(currentMemberData): void { 
    this.currentMember = JSON.parse(JSON.stringify(currentMemberData));
  }
  public get(): void { 
    return this.currentMember;
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


}
