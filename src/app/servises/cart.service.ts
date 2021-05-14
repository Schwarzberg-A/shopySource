import { Product } from '../others/product.types';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  inCart: Array<Product> = [];
  count: number = this.inCart.length;
  popupIsOpen = false;


  togglePopup() {
    this.popupIsOpen = !this.popupIsOpen;
  }

  close() {
    this.popupIsOpen = false;
  }

  addToCart(product) {
    for (let i = 0; i < this.inCart.length; i++) {
      if (this.inCart[i] === product) {
        return;
      }
    }
    this.inCart.push(product);
    this.count = this.inCart.length;
  }

  buy(): void {
    this.inCart.length ? alert('Покупка совершена') : alert('Корзина пуста');
    this.inCart = [];
    this.count = 0;
    this.popupIsOpen = false;
  }

  removeFromCart(product) {
    for (let i = 0; i < this.inCart.length; i++) {
      if (this.inCart[i] === product) {
        this.inCart.splice(i, 1);
      }
    }
    this.count = this.inCart.length;
  }

  get getTotalCost(): number {
    return this.inCart.reduce((sum, current) => {
      return sum + ((1 - current.price.discount) * current.price.value);
    }, 0);
  }

  get getTotalDiscount(): number {
    const sum = this.inCart.reduce((sum, current) => {
      return sum + current.price.value;
    }, 0);
    return (sum - this.getTotalCost) * (-1);
  }

  constructor(public productService: ProductService) { }
}
