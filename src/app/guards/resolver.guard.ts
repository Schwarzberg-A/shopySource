import { products } from '../others/product.data';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Product } from '../others/product.types';
import { DataService } from '../servises/data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {
  public products: Array<Product> = products;

  constructor(public dataService: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const productId = Number(route.params.id);
    return this.products.find((prod) => prod.id === productId);
  }

}
