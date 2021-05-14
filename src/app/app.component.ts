import { DataService } from './servises/data.service';
import { Component } from '@angular/core';
import { Toggles, toggles } from './others/toggles';
import { CartService } from './servises/cart.service';
import { ProductService } from './servises/product.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // trigger: string = 'mouseenter'
  toggles: Toggles[] = toggles
  popupIsOpen: boolean = this.cartService.popupIsOpen

  constructor(public cartService: CartService, public dataService: DataService, private productService: ProductService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataService.deleteFromStorage()
  }

}

@Component({
  selector: 'nz-demo-table-basic',
  template: `
 
  `
})
export class NzDemoTableBasicComponent {}