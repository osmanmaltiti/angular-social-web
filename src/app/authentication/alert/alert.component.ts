import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  @Input('error-message') errorMessage: string = 'Some Error';
  @Output('closeAlert') closeAlert: EventEmitter<any> = new EventEmitter();
  @ViewChild('outsideDialog') outsideDialogBox: ElementRef | undefined;

  clickOutside(event: Event) {
    const clickEventTarget = <HTMLElement>event.target;
    if (clickEventTarget === this.outsideDialogBox?.nativeElement) {
      this.closeAlert.emit('');
    }
  }

  onCloseAlert() {
    this.closeAlert.emit('');
  }
}
