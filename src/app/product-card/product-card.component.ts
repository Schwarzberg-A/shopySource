import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../others/product.types';
import { CartService } from '../servises/cart.service';
import { ProductService } from '../servises/product.service';

@Component({
  selector: 'app-product-card',
  template: `
<div class='card'>
  <button (click)='cartService.removeFromCart(this.product)' class='remove-product'><img width='10px' src="../assets/pictures/x.svg"></button>
  <div class='in-stock'>1 шт.</div>
  <app-bage [text]='product.bage.text' [style.background-color]='product.bage.color' class="card__bage-discount"></app-bage>

  <div class="card__gallery-wrapper">
    <figure class="card__gallery">
      <img class='card__gallery-image' [src]="mainImage">
    </figure>
  </div>

  <app-color-options class="color-options" *ngFor='let color of colors' (click)='changeImage(color)' [color]='color'></app-color-options>

  <div class="card__bottom-wrapp">
      <div class="card__company"><small>{{product.company}}</small></div>
      <div class="card__model" ><h2 (click)='openRoute()' [ngStyle]="{'cursor':'pointer'}">{{product.title}}</h2></div>

      <app-rating [rating]='product.rating'></app-rating>

      <app-price [price]='product.price'></app-price>

      <app-delivery [delivery]="product.deliveryOptions"></app-delivery>

      <div class="card__buttons">
        <app-button  class="card__button-add" (click)="cartService.addToCart(this.product)" [btnTitle]='btnTitle'></app-button>
        <app-button class="card__button-favorite" [favoriteIcon]='favoriteIcon' (click)="changeFavorite()"></app-button>
      </div>
  </div>
</div>
  `,
  styles: [`
    :host {
      position: relative;
      display: inline-block;
      margin-right: 30px;
      margin-bottom: 35px;
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 70px;
      max-width: 280px;
      border-radius: 8px;
      border: 1px solid gray;
    }
    .card__bage-discount {
      position: absolute;
      top: 2px;
      left: 2px;
    }
    .card__gallery {
      margin-left: 0px;
      margin-right: 0px;
      text-align: center;
    }
    .card__gallery-image {
      height: 250px;
      max-width: 100%;
      object-fit: cover
    }
    .card__company {
      line-height: 14px;
      font-size: 14px;
      color: #8855FF;
    }
    .card__model h2 {
      margin-bottom: 8px;
    }
    .card__buttons {
      position: absolute;
      display: flex;
      width: 88%;
      top: 90%;
      left: 15px;
    }
    .card__button-add {
      width: 70%;
      margin-right: auto;
    }
    .card__button-favorite {
      width: 45px
    }

    /* классы для popup */
    .remove-product {
      display: none;
      position: absolute;
      top: 12px;
      right: 12px;
      width: 24px;
      height: 23px;
      border-radius: 50%;
    }
    .remove-product:hover {
      box-shadow: 0 0 2px gray;
    }
    .remove-product:active {
      box-shadow: 0 0 0;
    }
    .in-stock {
      display: none;
      position: absolute;
      bottom: 12px;
      right: 12px;
    }
    ::ng-deep .head__cart-cards .card__buttons, ::ng-deep .head__cart-cards .card__bage-discount, ::ng-deep .head__cart-cards .color-options {
      display: none;
    }
    ::ng-deep .head__cart-cards .card {
      display: flex;
      padding: 10px;
      overflow: hidden;
      background-color: white;
    }
    ::ng-deep .head__cart-cards .card__gallery-wrapper, ::ng-deep .head__cart-cards .card__bottom-wrapp {
      width: 50%;
    }
    ::ng-deep .head__cart-cards .in-stock {
      display: inline-block;
      position: absolute;
      right: 12px;
    }
    ::ng-deep  .head__cart-cards .remove-product{
      display: flex;
      align-items: stretch;
    }
  `]
})
export class ProductCardComponent implements OnInit, OnChanges {


  get favoriteIcon(): string {
    return this.isFavorite ? '../../assets/pictures/favorite+.svg' : '../../assets/pictures/favorite.svg';
  }

  constructor(private router: Router, public cartService: CartService, public productService: ProductService) {
    productService.product = this.product;

  }
  @Input() product: Product;
  btnTitle = 'Добавить в корзину';
  isFavorite = false;
  colors;
  mainImage;

  openRoute() {
    this.router.navigate(['/catalog', this.product.id]);
  }

  changeFavorite(): boolean {
    return this.isFavorite = !this.isFavorite;
  }

  changeImage(color): void {
    this.mainImage = color.image;
  }

  ngOnChanges(): void {
    this.mainImage = this.product.image;
    this.colors = Object.values(this.product.colors);

  }


  ngOnInit(): void {
  }

}
