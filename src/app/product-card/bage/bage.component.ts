import { Component, OnInit, Input } from '@angular/core';
import { ProductBage } from '../../others/product.types'; 

@Component({
  selector: 'app-bage',
  template: `
  <div class="card__bage">
    <span class="card__bage-discount" >{{text}}</span>
  </div>
  `,
  styles: [`
    :host {
      padding: 5px;
      font-size: 16px;
      color: white;
      /* background-color: [color]; */
      border-radius: 5px;
    }
  `]
})
export class BageComponent implements OnInit {
  @Input() text: ProductBage
  constructor() { }

  ngOnInit(): void {
  }

}
