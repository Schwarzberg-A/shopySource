import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addedToCart = false
  btnTitle: string = this.addedToCart ?  'Добавленно' : 'Добавить в корзину'
  isFavorite: boolean = false
  colors
  mainImage
  product

  // public getProducts(): Observable<Array<Product>> {
  //   const url = 'https://heissberg.online/others/product.data.json'
  //   console.log(this.http.get<Array<Product>>(url))
  //   return this.http.get<Array<Product>>(url)
  // }
  


  openRoute() {
    this.router.navigate(['/catalog', this.product.id])
  }

  // addToCart () {
  //   this.addedToCart = true
  // }

  // get favoriteIcon(): string {
  //   return this.isFavorite ? '../../assets/pictures/favorite+.svg' : '../../assets/pictures/favorite.svg'
  // }

  // changeFavorite(): boolean{
  //   return this.isFavorite = !this.isFavorite;
  // }
  
  // changeImage(color): void {
  //   this.mainImage = color.image
  // }
  
  
  // ngOnChanges (): void {
  //   this.mainImage = this.product.image
  //   this.colors =  Object.values(this.product.colors)
  //   }
    
    constructor(private router: Router, private http: HttpService) { 
      // this.mainImage = this.product.image
      // this.colors =  Object.values(this.product.colors)

    }
}
