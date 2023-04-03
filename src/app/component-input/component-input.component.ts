import { Component } from '@angular/core';
import { orderBy } from 'lodash-es';

export interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input',
  templateUrl: './component-input.component.html',
  styleUrls: ['./component-input.component.css']
})
export class ComponentInputComponent {


  userData: User[] = [
    {firstname: 'Geo', lastname: 'Kags', age: 37},
    {firstname: 'Nick', lastname: 'Ame', age: 27},
    {firstname: 'Anna', lastname: 'Smith', age: 17},
    {firstname: 'Maria', lastname: 'Pepito', age: 47}
  ]

  //paradeigma lodash
  sortByAgeDesc() {
    this.userData = orderBy(this.userData, ['age'], ['desc'])
  }

  sortByAgeAsc() {
    this.userData = orderBy(this.userData, ['age'], ['asc'])
  }

  sortByAgeLastnameDesc() {
    this.userData = orderBy(this.userData, ['age', 'lastname'], ['desc', 'desc'])
  }

  init() {
    this.userData = [
      {firstname: 'Geo', lastname: 'Kags', age: 37},
      {firstname: 'Nick', lastname: 'Ame', age: 27},
      {firstname: 'Anna', lastname: 'Smith', age: 17},
      {firstname: 'Maria', lastname: 'Pepito', age: 47}
    ]
  }

  // agesort: 'desc' | 'asc' = 'desc';
  // sortByAgeDescMixalhs() {
  //   this.agesort = this.agesort === 'desc' ? 'asc' : 'desc';
  //   this.userData = orderBy(this.userData, ['age'], [this.agesort]);
  // }

}



