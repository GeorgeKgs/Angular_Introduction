import { Component } from '@angular/core';

export interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-component-input-output',
  templateUrl: './component-input-output.component.html',
  styleUrls: ['./component-input-output.component.css']
})
export class ComponentInputOutputComponent {

  userData: User[] = [
    {firstname: 'Geo', lastname: 'Kags', age: 37},
    {firstname: 'Nick', lastname: 'Ame', age: 27},
    {firstname: 'Anna', lastname: 'Smith', age: 17},
    {firstname: 'Maria', lastname: 'Pepito', age: 47}
  ]

  onDelete(index: number) {
    console.log(index)
    this.userData.splice(index, 1)
  }

}
