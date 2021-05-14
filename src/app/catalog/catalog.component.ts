import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../servises/data.service';


@Component({
  selector: 'app-catalog',
  template: `
    <app-product-card class="cards"
                      *ngFor='let prod of data$ | async'
                      [product]='prod'>
    </app-product-card>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 100%;
    }
  `]
})
export class CatalogComponent implements OnInit, OnChanges {
  public data$ 

  constructor(private route: ActivatedRoute, public dataService: DataService) {
    // this.route.queryParams.subscribe((queryParam) => {
    //   this.param = queryParam.param;
    //   this.newArray = this.dataService.data
    // });
  }

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getProducts()
  }

  ngOnDestroy(): void {
  }

}
