import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent {
  @Input()
  expanded: boolean = false;
  get icon() {
    return this.expanded ? 'chevron-left' : 'chevron-right';
  }
}
