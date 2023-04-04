import { Component, ViewChild } from '@angular/core';
import { User } from '../app.interfaces';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {

  users: User[] = [];

  @ViewChild(NgForm) form!: NgForm // koitaei sto template ti einai typou NgForm kai to xeirizomaste me to onoma form

  onSubmit(formData: any) {
    const formValue = formData.value as User // to kanoume cast se typo User
    this.users.push(formValue)
    this.form.reset()
  }

}
