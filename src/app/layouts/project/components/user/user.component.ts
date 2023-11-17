import { Component, Input } from '@angular/core';
import { JUser } from 'src/app/@core/interfaces/user';

@Component({
  selector: 'j-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: JUser;

  constructor() {}
}
