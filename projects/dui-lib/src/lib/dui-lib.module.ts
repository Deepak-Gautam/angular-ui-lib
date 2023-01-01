import { NgModule } from '@angular/core';
import { DuiLibComponent } from './dui-lib.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    DuiLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    DuiLibComponent
  ]
})
export class DuiLibModule { }
