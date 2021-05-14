import { Injectable } from '@angular/core';
import { Product } from '../others/product.types';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public data;
  public data$;
  public response;

  setData(data: Array<Product>): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  getFromHttp(): Observable<unknown> {
    const url = '/api/others/product.data.json';
    return this.http.get(url);
  }

  saveToStorage(products): void {
    localStorage.setItem('products', products);
  }

  getFromStorage(): string {
    return localStorage.getItem('products');
  }

  deleteFromStorage(): void {
    console.log('удалено');

    localStorage.clear();
  }

  getProducts(): Observable<any> {
    const fromStorage = JSON.parse(this.getFromStorage());
    if (fromStorage) {
      return of(fromStorage);
    } else {
      let forStorage;
      const response = this.getFromHttp();
      response.subscribe(
        r => {
          forStorage = r;
          this.saveToStorage(JSON.stringify(forStorage));
        }
      );
      return response;
    }
  }

  constructor(private http: HttpService) {}
}
