import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-page',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class CatalogPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
