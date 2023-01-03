import { NgModule } from '@angular/core';
import { DuiLibComponent } from './dui-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [DuiLibComponent],
  imports: [ButtonComponent],
  exports: [DuiLibComponent],
})
export class DuiLibModule {}
