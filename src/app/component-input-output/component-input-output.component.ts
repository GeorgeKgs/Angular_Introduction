import { Component } from '@angular/core';
import { User } from '../app.interfaces';



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

  receivedUser: User | undefined;

  onDelete(index: number) {
    console.log(index)
    this.userData.splice(index, 1)
  }

  onRecievedUser(user: User) {
    this.receivedUser = user
  }

}
