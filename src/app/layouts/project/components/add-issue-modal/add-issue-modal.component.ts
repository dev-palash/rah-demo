import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { IssueType, JIssue, IssueStatus, IssuePriority } from 'src/app/@core/interfaces/issue';
// import { quillConfiguration } from '@trungk18/project/config/editor';
import { quillConfiguration } from '../../config/editor';
import { NzModalRef } from 'ng-zorro-antd/modal';
// import { ProjectService } from '../../../state/project/project.service';
import { ProjectService } from '../../state/project/project.service';
// import { IssueUtil } from '../../../utils/issue';
import { IssueUtil } from '../../utils/issue';
// import { ProjectQuery } from 'src/app/@core/state/project/project.query';
import { ProjectQuery } from '../../state/project/project.query';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { JUser } from 'src/app/@core/interfaces/user';
import { tap } from 'rxjs/operators';
// import { NoWhitespaceValidator } from '@trungk18/core/validators/no-whitespace.validator';
import { NoWhitespaceValidator } from 'src/app/@core/validators/no-whitespace.validator';
// import { DateUtil } from '@trungk18/project/utils/date';
import { DateUtil } from '../../utils/date';

@Component({
  selector: 'add-issue-modal',
  templateUrl: './add-issue-modal.component.html',
  styleUrls: ['./add-issue-modal.component.scss']
})
@UntilDestroy()
export class AddIssueModalComponent implements OnInit {
  reporterUsers$: Observable<JUser[]>;
  assignees$: Observable<JUser[]>;
  issueForm: UntypedFormGroup;
  editorOptions = quillConfiguration;

  get f() {
    return this.issueForm?.controls;
  }

  constructor(
    private _fb: UntypedFormBuilder,
    private _modalRef: NzModalRef,
    private _projectService: ProjectService,
    private _projectQuery: ProjectQuery) {}

  ngOnInit(): void {
    this.initForm();
    this.reporterUsers$ = this._projectQuery.users$.pipe(
      untilDestroyed(this),
      tap((users) => {
        const [user] = users;
        if (user) {
          this.f['reporterId'].patchValue(user.id);
        }
      })
    );

    this.assignees$ = this._projectQuery.users$;
  }

  initForm() {
    this.issueForm = this._fb.group({
      type: [IssueType.TASK],
      priority: [IssuePriority.MEDIUM],
      title: ['', NoWhitespaceValidator()],
      description: [''],
      reporterId: [''],
      userIds: [[]]
    });
  }

  submitForm() {
    if (this.issueForm.invalid) {
      return;
    }
    const now = DateUtil.getNow();
    const issue: JIssue = {
      ...this.issueForm.getRawValue(),
      id: IssueUtil.getRandomId(),
      status: IssueStatus.BACKLOG,
      createdAt: now,
      updatedAt: now
    };

    this._projectService.updateIssue(issue);
    this.closeModal();
  }

  cancel() {
    this.closeModal();
  }

  closeModal() {
    this._modalRef.close();
  }
}
