import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elipse',
})
export class ElipsePipe implements PipeTransform {
  transform(value: string, limit = 50): string {
    if (!value) return '';
    return value.length > limit ? `${value.substr(0, limit)} ...` : value;
  }
}
