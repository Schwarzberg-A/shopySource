import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from './product-card.component';
import {ButtonModule} from '../button/button.module';
import { BageModule } from './bage/bage.module';
import { RatingModule } from './rating/rating.module';
import { ColorOptionsModule } from './color-options/color-options.module';
import { DeliveryModule } from './delivery/delivery.module';
import { PriceModule } from './price/price.module';

@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BageModule,
    RatingModule,
    ColorOptionsModule,
    PriceModule,
    DeliveryModule
  ],
  exports: [ProductCardComponent]

})
export class ProductCardModule { }
