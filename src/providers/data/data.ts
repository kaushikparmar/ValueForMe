import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
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
      'isNewMember': false
    }
  ];

  constructor() {
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

}
