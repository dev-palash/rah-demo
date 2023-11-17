import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IssueStatus } from 'src/app/@core/interfaces/issue';
// import { ProjectQuery } from 'src/app/@core/state/project/project.query';
import { ProjectQuery } from '../../../state/project/project.query';
import { AuthQuery } from '../../../auth/auth.query';
@UntilDestroy()
@Component({
  selector: 'board-dnd',
  templateUrl: './board-dnd.component.html',
  styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent {
  issueStatuses: IssueStatus[] = [
    IssueStatus.BACKLOG,
    IssueStatus.SELECTED,
    IssueStatus.IN_PROGRESS,
    IssueStatus.DONE
  ];

  constructor(public projectQuery: ProjectQuery, public authQuery: AuthQuery) {
    this.authQuery.userId$.subscribe(res=> console.log(res,'users')
    )
    this.projectQuery.issueByStatusSorted$(this.issueStatuses[0]).subscribe((res)=>{
      console.log('project issue by sorted',res);
    })
  }
}
