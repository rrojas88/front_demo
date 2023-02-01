import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  exports: [
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WelcomeModule { }
