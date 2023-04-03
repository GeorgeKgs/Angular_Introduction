import { Component, EventEmitter, Input, Output } from '@angular/core';
import  { User } from '../component-input-output.component';

@Component({
  selector: 'app-simple-table1',
  templateUrl: './simple-table1.component.html',
  styleUrls: ['./simple-table1.component.css']
})
export class SimpleTable1Component {
  @Input() userData: User[] = []; 

  @Output() delete = new EventEmitter<number>();

  onDelete(i: number) {
    this.delete.emit(i);
  }

}
