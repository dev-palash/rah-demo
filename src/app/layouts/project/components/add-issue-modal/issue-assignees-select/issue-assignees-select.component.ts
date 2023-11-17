import { Component, Input, ViewEncapsulation } from '@angular/core';
import { JUser } from 'src/app/@core/interfaces/user';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'issue-assignees-select',
  templateUrl: './issue-assignees-select.component.html',
  styleUrls: ['./issue-assignees-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueAssigneesSelectComponent {
  @Input() control: UntypedFormControl | any;
  @Input() users: JUser[];

  constructor() {}

  getUser(userId: string): any {
    return this.users.find((user) => user.id === userId);
  }
}
