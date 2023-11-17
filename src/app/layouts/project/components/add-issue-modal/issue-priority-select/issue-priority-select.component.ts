import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
// import { IssuePriorityIcon } from '@trungk18/interface/issue-priority-icon';
import { IssuePriorityIcon } from 'src/app/@core/interfaces/issue-priority-icon';
import { IssueUtil } from '../../../utils/issue';
import { IssuePriority } from 'src/app/@core/interfaces/issue';
// import { ProjectConst } from '../../config/const';
import { ProjectConst } from '../../../config/const';

@Component({
  selector: 'issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent {
  @Input() control: UntypedFormControl | any;
  priorities: IssuePriorityIcon[];

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  getPriorityIcon(priority: IssuePriority) {
    return IssueUtil.getIssuePriorityIcon(priority);
  }
}
