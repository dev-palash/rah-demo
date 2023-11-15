import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { ProjectListComponent } from './project-management/project-list/project-list.component';
import { ProjectAddEditComponent } from './project-management/project-add-edit/project-add-edit.component';
import { UserAddEditComponent } from './user-management/user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-management/user-list/user-list.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectAddEditComponent,
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
