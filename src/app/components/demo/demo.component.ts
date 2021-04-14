import { Component } from '@angular/core';
import { LoggerService } from '../services/logger/logger.service';
import { ElipsePipe } from '../pipes/elipse/elipse.pipe';
import { User } from '../reusable-component/reusable-component/reusable-component.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent {
  users: User[] = [];
  constructor(private loggerService: LoggerService) {
    this.users = loggerService.getUser() ; 
  }
  values: string[] = [];
  value = '';
  email: string = '';
  is_empty = this.value ? false : true;
  onclick(event: any) {
    console.log(event.target.textContent);
  }
  get_value(name: any) {
    this.loggerService.logger(name.value);
    this.values.push(name.value);
    name.value = '';
    this.is_empty = true;
    console.log(this.values);
  }
  set_value(event: any) {
    this.value = event.value;
    this.is_empty = false;
  }
  onChange($event: User) { // EventEmitter reciever function 
    // $event parameter represents the emitted value from the custom component (app-reusable-component)
    const { name, id } = $event;
    console.log(`user : ${name} with id : ${id} has been clicked `);
  }
}
