import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]',
})
export class AdvancedHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'red';
  @HostBinding('style.color') color: string = 'black';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseexit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.color = this.defaultColor;
  }
}
