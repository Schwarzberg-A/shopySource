import { CatalogService } from './../servises/catalog.service';
import { Component, OnInit, Input } from '@angular/core';
import { Toggles } from '../others/toggles';

@Component({
  selector: 'app-toggle',
  template: `
    <app-button (click)="catalogService.getProducts(toggle.value)"
                *ngIf="toggle.value"
                [btnStyle]='btnStyle'
                class='toggleBtn'
                [btnTitle]='toggle.label'>
    </app-button>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
    .toggleBtn {
      width: 100%;
      height: 45px;
      margin-bottom: 10px;
    }
  `]
})
export class ToggleComponent implements OnInit {
  @Input() toggle: Toggles;
  btnStyle = {'background-color': 'gray', color: 'white', 'font-size': '1.2em'};

  // setUrl(val): void {
  //   this.router.navigate(['catalog'], {relativeTo: this.route, queryParams: {param: val}});
  // }

  constructor(public catalogService: CatalogService) {

  }

  ngOnInit(): void {
  }

}
