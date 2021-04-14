import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  user_types: string[] = ['user', 'publisher'];
  onsubmit(form: any) {
    console.log(form.value);
  }
}
