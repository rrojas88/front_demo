import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentComponent } from './pages/department/department.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from '../shared/menu/menu.component';


@NgModule({
  declarations: [
    DepartmentComponent,

    //MenuComponent
  ],
  exports: [
    DepartmentComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
  ]
})
export class DepartmentsModule { }
