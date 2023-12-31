import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'j-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: UntypedFormControl;
  @Input() containerClassName = '';
  @Input() icon: string;
  @Input() iconSize = 16;
  @Input() placeholder = '';
  @Input() enableClearButton: boolean;

  get iconContainerWidth(): number {
    return this.iconSize * 2;
  }

  get isShowClearButton(): boolean {
    return this.enableClearButton && this.control?.value;
  }

  constructor() {}

  ngOnInit(): void {
    this.control = this.control ?? new UntypedFormControl('');
  }

  clear() {
    this.control.patchValue('');
  }
}
