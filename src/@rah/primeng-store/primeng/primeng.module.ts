import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    AccordionModule
  ],
  exports: [
    CalendarModule,
    AccordionModule
  ]
})
export class PrimengModule { }
