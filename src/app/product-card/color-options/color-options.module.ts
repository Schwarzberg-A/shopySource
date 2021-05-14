import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorOptionsComponent } from './color-options.component';



@NgModule({
  declarations: [ColorOptionsComponent],
  imports: [
    CommonModule
  ],
  exports: [ColorOptionsComponent],
})
export class ColorOptionsModule { }
