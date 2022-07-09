import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPopup]',
})
export class PopupDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') setOpen() {
    this.isOpen = !this.isOpen;
  }
}
