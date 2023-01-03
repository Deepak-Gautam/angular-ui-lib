import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { LIB_BUTTON_SIZE, LIB_BUTTON_TYPE } from './button.base';

export type ButtonType = 'default' | 'primary' | 'secondary' | 'outlined' | 'animated';
export type ButtonSize = 'sm-x' | 'sm-xx' | 'sm' | 'md' | 'large' | 'large-x' | 'large-xx';

@Component({
  standalone: true,
  imports: [CommonModule],
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[lib-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./button.component.scss'],
  host: {
    ...LIB_BUTTON_SIZE,
    ...LIB_BUTTON_TYPE,
  },
})
export class ButtonComponent {
  @Input() variant: ButtonType = 'default';
  @Input() size: ButtonSize = 'md';
  @Input() icon = '';

  @HostBinding('class.disabled')
  @Input()
  disabled = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.elementRef.nativeElement.blur();
  }
}
