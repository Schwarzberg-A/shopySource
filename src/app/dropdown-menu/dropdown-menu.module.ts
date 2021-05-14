import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { MenuModule } from '../menu/menu.module';
import {ButtonModule} from '../button/button.module';




@NgModule({
  declarations: [DropdownMenuComponent],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
  ],
  exports: [DropdownMenuComponent],

})
export class DropdownMenuModule { }
