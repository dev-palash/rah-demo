import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rah-ticketing';
  date: Date | undefined;
  expanded: boolean;
  manualToggle() {
    this.expanded = !this.expanded;
  }
}
