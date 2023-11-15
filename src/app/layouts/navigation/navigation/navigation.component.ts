import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  expanded: boolean = false;
  @Output() manualToggle = new EventEmitter();
  constructor() {}

  toggle() {
    this.manualToggle.emit();
  }
}
