import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'master',
    loadChildren: () => import('../app/layouts/master/master.module').then((m) => m.MasterModule)
  },
  {
    path: '',
    redirectTo: "master",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
