import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servises/data.service';
import { Product } from '../others/product.types';


@Component({
  selector: 'app-product-page',
  template: `
    <div class="product-page__img-wrapp">
      <img class="product-page__img" [src]='product.image'>
    </div>
    <div class="card__bottom-wrapp">
      <div class="card__company">
        <small>{{product.company}}</small>
      </div>
      <div class="card__model">
        <h2 [ngStyle]="{'cursor':'pointer'}">{{product.title}}</h2>
      </div>

      <app-rating [rating]='product.rating'></app-rating>

      <app-price [price]='product.price'></app-price>

      <app-delivery [delivery]="product.deliveryOptions"></app-delivery>
      <app-button class="card__button-add" btnTitle='Добавить в корзину'></app-button>
    </div>

  `,
  styles: [`
    :host {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
    .product-page__img-wrapp {
      width: 100%;
      text-align: center;
    }
    .product-page__img {
      height: 250px;
      max-width: 100%;
      object-fit: cover
    }

    .card__bottom-wrapp {
      width: 100%;
    }
    .card__model h2 {
      margin-bottom: 8px;
    }
    .card__button-add {
      width: 100%;
      height: 50px;
      margin-top: 50px;
      margin-right: auto;
    }
  `]
})
export class ProductPageComponent implements OnInit {
  favoriteIcon = '../../assets/pictures/favorite.svg';
  // public products = products
  // public id
  public product: Product;

  constructor(private route: ActivatedRoute, private data: DataService) {
    // this.id = this.route.snapshot.params['id']
    this.product = this.route.snapshot.data.product;
  }

  ngOnInit(): void {
    this.product = this.route.snapshot.data.product;
    // from(products).pipe(
    //   find(prod => {return prod.id == this.id}),
    // ).subscribe(prod => this.product = prod)
  }

}
