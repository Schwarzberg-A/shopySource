import { Component, OnInit, Input } from '@angular/core';
import { ProductPrice } from '../../others/product.types'; 

@Component({
  selector: 'app-price',
  template: `
  <div class="card__discount" *ngIf='price.discount'>
    <span class='card__old-price'>{{price.value | currency: 'RUB':'symbol':'1.0-0' }}</span>
    <span class='card__percent'>-{{price.discount | percent}}</span>
  </div>
  <div class="card__price"><strong>{{getNewPrice | currency: 'RUB': 'symbol': '1.0-0'}}</strong></div>
  `,
  styles: [`
      .card__discount {
      margin-bottom: 5px;
      font-size: .8em;
    }
    .card__old-price {
      margin-right: 5px;
      text-decoration: line-through;
      color: rgb(150,150,150);
    }
    .card__percent {
      padding: 1px;
      color: white;
      background-color: red;
      border-radius: 3px;
    }
    .card__price {
      margin-bottom: 5px;
    }
  
  `]
})
export class PriceComponent implements OnInit {
  @Input() price: ProductPrice

  get getNewPrice() {
    return (1 - this.price.discount) * this.price.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
