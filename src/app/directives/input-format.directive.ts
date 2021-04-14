import { Directive, HostListener, Input, ElementRef } from '@angular/core';

// this is how custom directives are built

@Directive({
  selector: '[inputFormat]',
})
export class InputFormatDirective {
  @Input('inputFormat') format: string = 'lowerCase';

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'lowerCase') {
      this.el.nativeElement.value = value.toLowerCase();
    }
    if (this.format == 'upperCase') {
      this.el.nativeElement.value = value.toUpperCase();
    }
  }
}
