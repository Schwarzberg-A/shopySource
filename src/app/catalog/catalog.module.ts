import { PriceModule } from './../product-card/price/price.module';
import { RatingModule } from '../product-card/rating/rating.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from '../catalog/catalog.component';
import { ProductCardModule } from '../product-card/product-card.module';
import {ButtonModule} from '../button/button.module';
import { CatalogPageComponent } from './catalog-page.component';
import { ProductPageComponent } from './product-page.component';
import { DeliveryModule } from '../product-card/delivery/delivery.module';
import { CatalogService } from '../servises/catalog.service';
import { SearchModule } from '../search/search.module';




@NgModule({
  declarations: [CatalogComponent, CatalogPageComponent, ProductPageComponent],
  imports: [
    CommonModule,
    ProductCardModule,
    ButtonModule,
    CatalogRoutingModule,
    RatingModule,
    PriceModule,
    DeliveryModule,
    SearchModule
  ],
  exports: [CatalogComponent, CatalogPageComponent, ProductPageComponent, CatalogRoutingModule],
  providers: [CatalogService]
})
export class CatalogModule { }
