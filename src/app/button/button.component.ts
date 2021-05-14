import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ButtonColorEnum } from '../others/enums';

@Component({
  selector: 'app-button',

  template: `
    <button
      [ngStyle]='btnStyle'
      [class.primary]="color == 'primary'"
      [class.accent]="color == 'accent'"
      [class.success]="color == 'success'"
      [class.warning]="color == 'warning'"
      [style.padding.px]="getSize"
      [attr.disabled]='disabled'
      [class.activ]="isActive"
    >{{btnTitle}}
      <img [src]='favoriteIcon'>
    </button>
  `,


  styles: [`
    button {
      width: 100%;
      height: 100%;
    }
    :host {
      display: inline-block;
    }
    button {
      background-color: white;
      border-radius: 5px;
      padding: 4px;
      border: 1px solid gray;
    }
    .activ:hover {
      outline: 3px solid gray;
    }
    .primary {
      background-color: blue;
      color: white
    }
    .accent {
      background-color: yellow;
      color: white
    }
    .success {
      background-color: green;
      color: white
    }
    .warning {
      background-color: orange;
      color: white
    }
  `]
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() color: ButtonColorEnum;
  @Input() favoriteIcon: string;
  @Input() isActive: boolean;
  @Input() isDisabled: any;
  @Input() btnTitle: string;
  @Input() btnStyle: string;

  disabled: string;
  getSize: number;


  @Input() set size(val) {
    if (val === 'small') {
      this.getSize = 15;
    } else if (val === 'large') {
      this.getSize = 25;
    } else {
      this.getSize = 20;
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.disabled = this.isDisabled === true ? '' : null;
    // if (this.btnTitle) {
    //   console.log(2,this.btnTitle)
    //   this.btnTitle = this.btnTitle
    // }
  }

}
