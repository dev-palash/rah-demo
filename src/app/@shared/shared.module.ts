import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './components/button/button.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AvatarComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    SvgIconComponent,
    SvgDefinitionsComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AvatarComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    SvgIconComponent,
    SvgDefinitionsComponent,
    InputComponent
  ]
})
export class SharedModule { }
