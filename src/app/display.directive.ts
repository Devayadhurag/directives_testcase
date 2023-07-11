import { Directive, ElementRef, Renderer2, HostListener, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appDisplay]'
})

export class DisplayDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private router: Router) { }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }
}
