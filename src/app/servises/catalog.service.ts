import { Product } from '../others/product.types';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { products } from '../others/product.data';

@Injectable()

export class CatalogService {
  products: Array<Product> = products;
  toggleValue = 'none';
  newArray: Product[] = this.products;

  getProducts(filterBy) {
    if (this.toggleValue === filterBy) {
      return;
    }
    this.toggleValue = filterBy;
    this.newArray = [];
    for (const item of this.products) {
      this.getObj(filterBy, item);
    }
    this.dataService.setData(this.newArray);
  }

  getProduct(id): void {
    const prod = products.find((item) => item.id == id);
    if (prod == undefined) { this.newArray = this.products; } else { this.newArray = [prod]; }
    this.dataService.setData(this.newArray);
  }


  getObj(filterBy, product): void {
    if (filterBy === 'actionPrice') {
      if (product.price.discount) {
        this.newArray.push(product);
      }
    } else if (filterBy === 'avialable') {
      if (product.deliveryOptions.avialable) {
        this.newArray.push(product);
      }
    } else {
      this.newArray = this.products;
    }
  }

  constructor(public dataService: DataService) { }

}

