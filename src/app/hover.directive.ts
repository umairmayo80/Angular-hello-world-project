import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  color: string = '#CBC3E3';

  constructor(private element: ElementRef) {
    console.log(this.element);
  }

  ngOnInit(): void {
    console.log(this.element.nativeElement);
    // this.element.nativeElement.style.backgroundColor = this.color;
  }

  //  HostListener listens to events on the parent element on which the directive is applied

  @HostListener('mouseenter') onMuseEnter() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave') onMuseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
}
