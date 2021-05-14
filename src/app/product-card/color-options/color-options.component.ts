import { Component, OnInit, Input } from '@angular/core';
import { ProductColors } from '../../others/product.types'; 

@Component({
  selector: 'app-color-options',
  template: `
    <span [style.background-color]='color.color' class='color-option' ></span>
  `,
  styles: [ `
  :host {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;

  }
  .color-option {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid black;
    cursor: pointer;
  }
  `]
})
export class ColorOptionsComponent implements OnInit {
  @Input() color: ProductColors
  constructor() { }

  ngOnInit(): void {
  }

}
