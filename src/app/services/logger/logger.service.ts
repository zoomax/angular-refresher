import { Injectable } from '@angular/core';
import { User } from '../../reusable-component/reusable-component/reusable-component.component';
const users: User[] = [
  {
    name: 'hazem tarek',
    age: 25,
    salary: 25000,
    address: '123 main st',
    id: '123',
  },
  {
    name: 'tarek hemaily ',
    age: 25,
    salary: 27000,
    address: '123 main st',
    id: '143',
  },
  {
    name: 'hazem hemaily ',
    age: 25,
    salary: 29000,
    address: '123 main st',
    id: '153',
  },
];
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logger(data: any) {
    console.log(data);
  }
  getUser(): User[] {
    return users;
  }
}

// custom service
// is a normal class decorated with "Injectable" decorator to emply that this class is a service
// in order use this servise in your components :
//    => first : include this service into "providers" array of "NgModule" object in the "app.module.ts" file (see app.module.ts file)
//    => second: import it into your component file and inject it into you component's constructor (see demo.component.ts file)
//    that's all folks.....
