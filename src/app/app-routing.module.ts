import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'master',
    loadChildren: () => import('../app/layouts/master/master.module').then((m) => m.MasterModule)
  },
  {
    path: 'project',
    loadChildren: () => import('../app/layouts/project/project.module').then( (m)=> m.ProjectModule)
  },
  {
    path: '',
    redirectTo: "project",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
