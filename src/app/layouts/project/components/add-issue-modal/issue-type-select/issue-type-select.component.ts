import { Component, Input } from '@angular/core';
import { IssueType } from 'src/app/@core/interfaces/issue';
import { IssueUtil } from '../../../utils/issue';
// import { IssueTypeWithIcon } from '@trungk18/interface/issue-type-icon';
import { IssueTypeWithIcon } from 'src/app/@core/interfaces/issue-type-icon';
import { UntypedFormControl } from '@angular/forms';
// import { ProjectConst } from '../../config/const';
import { ProjectConst } from '../../../config/const';

@Component({
  selector: 'issue-type-select',
  templateUrl: './issue-type-select.component.html',
  styleUrls: ['./issue-type-select.component.scss']
})
export class IssueTypeSelectComponent {
  @Input() control: UntypedFormControl | any;

  issueTypes: IssueTypeWithIcon[];

  constructor() {
    this.issueTypes = ProjectConst.IssueTypesWithIcon;
  }

  getIssueTypeIcon(issueType: IssueType) {
    return IssueUtil.getIssueTypeIcon(issueType);
  }
}
