import { Component } from '@angular/core';
import { SideBar } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Introduction';

  sideBarMenu: SideBar[] = [
    {text: 'Greetings', path: 'greeting'},
    {text: 'One way bind', path: 'one-way-bind'},
    {text: 'Event Bind', path: 'event-bind'},
    {text: 'Two wy Bind', path: 'two-way-bind'},
    {text: 'Structural Directives', path: 'structural-directives'},
    {text: 'Template Variables', path: 'template-variables'},
    {text: 'Component Input', path: 'component-input'},
    {text: 'Component Input Output', path: 'component-input-output'}
  ]
}


