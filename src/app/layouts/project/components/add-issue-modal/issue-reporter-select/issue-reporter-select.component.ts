import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { JUser } from 'src/app/@core/interfaces/user';

@Component({
  selector: 'issue-reporter-select',
  templateUrl: './issue-reporter-select.component.html',
  styleUrls: ['./issue-reporter-select.component.scss']
})
export class IssueReporterSelectComponent {
  @Input() control: UntypedFormControl | any;
  @Input() users: JUser[];

  constructor() {}

  getUser(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
}
