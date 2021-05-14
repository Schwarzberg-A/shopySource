import { Component, OnInit, Input } from '@angular/core';
import {ButtonEventEnum, ButtonColorEnum, ButtonSizeEnum} from '../others/enums'

@Component({
  selector: 'app-dropdown-menu',
  template: `
  <div class="dropdown-menu" >     
    <app-button class="dropdown-button" (click)="toggle($event, buttonEventEnum.Click)" (mouseleave)="leave($event, buttonEventEnum.Mouseleave)" (mouseenter)="toggle($event, buttonEventEnum.Mouseenter)" [btnTitle]='btnTitle' [color]='color' [size]='size' [isActive] = 'isActive' [isDisabled] = 'isDisabled'></app-button>
    <br>
    <app-menu class="menu" [class.hidden]='!this.isOpen' class="menu" ></app-menu>
  </div>
  `,
  styles: [`
  .hidden  {
      transform: scale(0, 0);
      top: -1000px;
      left: -1000px;
    }
    .dropdown-menu {
      position: relative;
    }
    .menu {
      z-index:2;
      position: absolute;
    }
  `]
})
export class DropdownMenuComponent implements OnInit {
  @Input() isOpen: boolean
  @Input() trigger: string
  color = ButtonColorEnum.Default
  size = ButtonSizeEnum.Small;
  btnTitle: string = 'Dropdown Button'
  isActive: boolean = false
  isDisabled: boolean = false
  buttonEventEnum: typeof ButtonEventEnum = ButtonEventEnum


  toggle(event: MouseEvent, type: ButtonEventEnum) {
    if (type === this.trigger) {
      this.isOpen = !this.isOpen
    } else {
      event.preventDefault();
    }
  }

  leave(event: MouseEvent, type: ButtonEventEnum) {
    if (this.trigger === 'mouseenter') {
      setTimeout(() => this.isOpen = false, 500)
    }
  }

  // ButtonEventEnum.Click | ButtonEventEnum.Hover
  constructor() { }

  ngOnInit(): void {
  }

}
