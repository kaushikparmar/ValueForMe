import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {
  familyName: any;
  panDetails: any;
  constructor(public http: HttpClient) {
    this.familyName = [
      {name : 'Rohit Prasad'},
      {name : 'Pradip Malpute'},
      {name : 'Ravindra Salukhe'},
      {name : 'Kaushik Parmar'},
      {name : 'Satish Gaurav'}
    ]
    this.panDetails = [
      {
        value : 'ABCDEF123456',
        name : 'Rohit Prasad',
        title : "Mr."
    },
      {
        value : 'ABCDEF456789',
        name : 'Pradip Malpute',
        title : "Mr."
      },
      {
        value : 'ABCDEF546454',
        name : 'Ravindra Salukhe',
        title : "Mr."
      },
      {
        value : 'ABCDEF491020',
        name : 'Kaushik Parmar',
        title : "Mr."
      },
      {
        value : 'ABCDEF491023',
        name : 'Satish Gaurav',
        title : "Mr."
      }

    ]
  }
  filterName(searchName) {
    return this.familyName.filter((names) => {
      return names.name.toLowerCase().indexOf(searchName.toLowerCase()) > -1;
    })
  }

  filterPanData(searchPan) {
    return this.panDetails.filter((panNo) => {
      return panNo.value.toLowerCase().indexOf(searchPan.toLowerCase()) > -1;
    })
  }

}
