import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, Observable, } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, } from 'rxjs/operators';
import { CatalogService } from '../servises/catalog.service';
import { products } from '../others/product.data';
import { Product } from '../others/product.types';
import { DataService } from '../servises/data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <div class="search__wrapper"
         (focusin)='focusin()'
         (focusout)="focusout()">
      <input class="search__input"
             type="text"
             [formControl]="input">
      <button class="search__btn" (click)='sendToUrl(input.value)'>
        <img class="search__img" src="../../assets/pictures/search.png" alt="Иконка поиска">
      </button>
      <div class='sortedArrayWrap' *ngIf="isFocus">
        <div *ngIf="sortedArray$  | async as sortedArray ">
          <ng-container *ngIf="sortedArray.length > 0; else notFound">
            <ul class="sortedArray">
              <li class="sortedProduct" *ngFor='let product of sortedArray'>
                <a [routerLink]="['/catalog', product.id]">{{ product.title }}</a>
              </li>
            </ul>
          </ng-container>
          <ng-template #notFound>
            <div class='sortedArray notFound'>не найдено</div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hidden {
      transform: scale(0, 0);
      top: -1000px;
      left: -1000px;
    }
    .sortedProduct {
      white-space: nowrap;
      margin-bottom: 5px;
      padding: 3px;
    }
    .notFound {
      text-align: center;
    }
    .sortedArray {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 80%;
      max-height: 300px;
      padding: 10px;
      overflow: hidden;
      border: 1px solid black;
      border-radius: 5px;
      background-color: #f2f2f2;
    }
    .search__wrapper {
      position: relative;
      display: flex;
    }
    .search__input {
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 15px;
    }
    .search__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      margin-left: 10px;
      border-radius: 50%;
    }
    .search__btn:focus {
      box-shadow: 0 0 0
    }
    .search__btn:hover {
      box-shadow: 0 0 5px gray;
    }
    .search__btn:active {
      box-shadow: 0 0 0;
    }
    .search__img {
      max-height: 20px;
      max-width: 100%;
    }
  `]
})
export class SearchComponent implements OnInit {
  public sortedArray$: Observable<Array<any>>;
  public products: Array<Product> = products;
  public isFocus = false;
  public data$: Observable<any> = this.data.getProducts();
  public input = new FormControl();

  focusin(): void {
    this.isFocus = true;
  }

  focusout(): void {
    setTimeout(() => this.isFocus = false, 150);
  }

  public sortedProducts(value: string): Observable<Array<any>> {
    return from(this.data.getProducts()).pipe(
      map((values: Array<Product>) => {
        console.log(values);
        return values.filter((product: Product) => product.title.toLowerCase().indexOf(value.toLowerCase()) > -1);
      }),
    );
  }

  public sendToUrl(val): Promise<boolean> {
    if (!val) { return; }
    // this.catalogService.getProduct(val);
    return this.router.navigate(['/catalog'], {relativeTo: this.route, queryParams: {search: val}});
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private data: DataService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.data$.subscribe();
    this.search();
  }


  public search(): void {
    this.sortedArray$ = this.input.valueChanges.pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((value: string) => {
        return this.sortedProducts(value.toLowerCase());
      })
    );
  }
}
