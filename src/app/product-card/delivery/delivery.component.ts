import { Component, OnInit, Input } from '@angular/core';
import { ProductDeliveryOptions } from '../../others/product.types'; 

@Component({
  selector: 'app-delivery',
  template: `
  <div class="card__home-delivery">Доставим на дом: {{delivery.delivery}}</div>
  <div class="card__postomate-delivery">Доставка в постомат: {{avialable}}</div>
  <div class="card__avialable">Доступно: {{delivery.avialable}} шт.</div>
  `,
  styles: [`


  `]
})
export class DeliveryComponent implements OnInit {
@Input() delivery: ProductDeliveryOptions

get avialable() {
  return this.delivery.postomate === true ? 'доступна' : 'недоступна'
}
  constructor() { }

  ngOnInit(): void {
  }

}
