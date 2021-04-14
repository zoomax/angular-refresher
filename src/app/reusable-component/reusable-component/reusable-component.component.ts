import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
export interface User {
  id?: string;
  name?: string;
  age?: number;
  salary?: number;
  address?: string;
}
@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
  styleUrls: ['./reusable-component.component.css'],
})
export class ReusableComponentComponent {
  @Input('data') userInfo: User = {};
  // => this decorator is for recieving data from parent component
  // => it also provides an alias known only to the template not to the .ts file
  // => if this alias is not provided as a parameter to @Input decorator in the .ts file,
  //    this proprty will be known for both HTML template and the .ts with it's assigned name in the .ts file
  @Output("change") change = new EventEmitter();
  
  // => this decorator is for emitting data to  parent component
  // => it has a value of 'EventEmitter' instance which is the object responsible for emitting events to parent component 
  //    using .emit() function 
  // => it also provides an alias known only to the template not to the .ts file
  // => if this alias is not provided as a parameter to @Output decorator in the .ts file,
  //    this proprty will be known for both HTML template and the .ts with it's assigned name in the .ts file
  onClick(event: any) {
    console.log('this is from the event emitter');
    this.change.emit({ // emitting a value to the outside of this component 
      id :this.userInfo.id , 
      name: this.userInfo.name ,  
    });
  }
}
