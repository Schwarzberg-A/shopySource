import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '../toggle/toggle.component';
import {ButtonModule} from '../button/button.module';
import { CatalogService } from '../servises/catalog.service';


@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ToggleComponent],
  providers: [CatalogService]

})
export class ToggleModule { }
