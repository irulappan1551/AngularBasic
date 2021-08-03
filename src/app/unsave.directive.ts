import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnsave]'
})
export class UnsaveDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="red";
  }

}
