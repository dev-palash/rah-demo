import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-management/project-list/project-list.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
