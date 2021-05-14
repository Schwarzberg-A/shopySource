import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupCartComponent } from './popup-cart.component';
import {ButtonModule} from '../../button/button.module';
import { ProductCardModule } from '../../product-card/product-card.module';
import { CartService } from 'src/app/servises/cart.service';




@NgModule({
  declarations: [PopupCartComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ProductCardModule
  ],
  exports: [PopupCartComponent],
  providers: [CartService]
})
export class PopupCartModule { }
