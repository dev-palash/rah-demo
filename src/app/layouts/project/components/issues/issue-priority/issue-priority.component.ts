import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { JIssue, IssuePriority } from 'src/app/@core/interfaces/issue';
// import { IssuePriorityIcon } from '@trungk18/interface/issue-priority-icon';
import { IssuePriorityIcon } from 'src/app/@core/interfaces/issue-priority-icon';
import { IssueUtil } from '../../../utils/issue';
import { ProjectService } from '../../../state/project/project.service';
// import { ProjectConst } from '../../config/const';
import { ProjectConst } from '../../../config/const';

@Component({
  selector: 'issue-priority',
  templateUrl: './issue-priority.component.html',
  styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  selectedPriority: IssuePriority;
  get selectedPriorityIcon() {
    return IssueUtil.getIssuePriorityIcon(this.selectedPriority);
  }

  priorities: IssuePriorityIcon[];

  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  ngOnChanges(): void {
    this.selectedPriority = this.issue?.priority;
  }

  isPrioritySelected(priority: IssuePriority | any) {
    return priority === this.selectedPriority;
  }

  updateIssue(priority: IssuePriority | any) {
    this.selectedPriority = priority;
    this._projectService.updateIssue({
      ...this.issue,
      priority: this.selectedPriority
    });
  }
}
