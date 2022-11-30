import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormats]'
})
export class InputFormatsDirective {
  @Input('format') format: string | undefined;
  // @HostListener('focus') onFocus() {
  //   console.log("on focus");
  // }

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if(this.format=='uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
    // console.log("on blur");
  }

  constructor(private el: ElementRef) { }

}
