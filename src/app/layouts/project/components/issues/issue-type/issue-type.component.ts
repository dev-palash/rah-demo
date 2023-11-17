import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IssueType, JIssue } from 'src/app/@core/interfaces/issue';
// import { IssueTypeWithIcon } from '@trungk18/interface/issue-type-icon';
import { IssueTypeWithIcon } from 'src/app/@core/interfaces/issue-type-icon';
import { ProjectService } from '../../../state/project/project.service';
import { IssueUtil } from '../../../utils/issue';
// import { ProjectConst } from '../../config/const';
import { ProjectConst } from '../../../config/const';

@Component({
  selector: 'issue-type',
  templateUrl: './issue-type.component.html',
  styleUrls: ['./issue-type.component.scss']
})
export class IssueTypeComponent implements OnInit, OnChanges {
  @Input() issue: JIssue;

  get selectedIssueTypeIcon(): string {
    return IssueUtil.getIssueTypeIcon(this.issue.type);
  }

  issueTypes: IssueTypeWithIcon[];

  constructor(private _projectService: ProjectService) {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  ngOnInit() {}

  ngOnChanges(): void {}

  updateIssue(issueType: IssueType | any) {
    this._projectService.updateIssue({
      ...this.issue,
      type: issueType
    });
  }

  isTypeSelected(type: IssueType | any) {
    return this.issue.type === type;
  }
}
