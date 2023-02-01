import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './pages/info-user/info-user.component';


@NgModule({
  declarations: [
    InfoUserComponent
  ],
  exports: [
    InfoUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoUserModule { }
