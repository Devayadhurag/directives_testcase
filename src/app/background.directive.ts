import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color = '#808080'
  }

}
