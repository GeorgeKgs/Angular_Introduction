import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

interface User {
  firstname: string;
  lastname: string;
  age: number;
}

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {
  paragraph = new LoremIpsum().generateParagraphs(1);
  paragraphVisible = true;

  userData: User[] = [
    {firstname: 'Geo', lastname: 'Kags', age: 37},
    {firstname: 'Nick', lastname: 'Ame', age: 27},
    {firstname: 'Anna', lastname: 'Smith', age: 17},
    {firstname: 'Maria', lastname: 'Pepito', age: 47}
  ]

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible
  }

}
