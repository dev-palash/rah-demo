// import { IssuePriorityIcon } from '@trungk18/interface/issue-priority-icon';
import { IssuePriorityIcon } from 'src/app/@core/interfaces/issue-priority-icon';
import { IssuePriority, IssueType } from 'src/app/@core/interfaces/issue';
import { IssueUtil } from '../utils/issue';
// import { IssueTypeWithIcon } from '@trungk18/interface/issue-type-icon';
import { IssueTypeWithIcon } from 'src/app/@core/interfaces/issue-type-icon';

export class ProjectConst {
  /* eslint-disable @typescript-eslint/naming-convention */
  static readonly IssueId = 'issueId';
  static readonly Projects = 'Projects';
  static PrioritiesWithIcon: IssuePriorityIcon[] = [
    IssueUtil.getIssuePriorityIcon(IssuePriority.LOWEST),
    IssueUtil.getIssuePriorityIcon(IssuePriority.LOW),
    IssueUtil.getIssuePriorityIcon(IssuePriority.MEDIUM),
    IssueUtil.getIssuePriorityIcon(IssuePriority.HIGH),
    IssueUtil.getIssuePriorityIcon(IssuePriority.HIGHEST)
  ];

  static IssueTypesWithIcon: IssueTypeWithIcon[] = [
    new IssueTypeWithIcon(IssueType.BUG),
    new IssueTypeWithIcon(IssueType.STORY),
    new IssueTypeWithIcon(IssueType.TASK)
  ];
  /* eslint-enable @typescript-eslint/naming-convention */
}
