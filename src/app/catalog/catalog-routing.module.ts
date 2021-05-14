import { ResolverGuard } from '../guards/resolver.guard';
import { CatalogComponent } from './catalog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './catalog-page.component';
import { ProductPageComponent } from './product-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
        pathMatch: 'full',
      },
      {
        path: ':id',
        resolve: {
          product: ResolverGuard,
        },
        component: ProductPageComponent,
        pathMatch: 'full',
      }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
