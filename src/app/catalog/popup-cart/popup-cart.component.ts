import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Product } from '../../others/product.types';
import {ButtonEventEnum, ButtonColorEnum, ButtonSizeEnum} from '../../others/enums'
import { CartService } from 'src/app/servises/cart.service';

@Component({
  selector: 'app-popup-cart',
  template: `
        <div  [ngStyle]="{'position':'relative'}" [class.hidden]="!cartService.popupIsOpen">
          <div class='head__cart-popup' >
            <div class="head__cards-wrapp">
              <div class="popup__head">
                <span (click)='cartService.close()' class="popup__head-close"><img  width="15px" src="../../assets/pictures/x.svg"></span>
              </div>
              <app-product-card  class="head__cart-cards" *ngFor='let product of cartService.inCart' [product]='product'></app-product-card>
              <div  class="head__popup-payment">
                <p class="popup__total-price">общая скидка составила: <span [ngStyle]="{'color':'rgb(224, 120, 50)'}">
                  {{cartService.getTotalDiscount | currency: 'RUB': 'symbol': '1.0-0'}}
                </span></p>
                <p class="popup__total-price">итого к оплате:<span >
                  {{cartService.getTotalCost | currency: 'RUB': 'symbol': '1.0-0'}}
                </span></p>
                <app-button class="popup__total-button" (click)='cartService.buy()' btnTitle='Оплатить заказ' [color]='btnColor'></app-button>
              </div>
            </div>
          </div>
        </div>
  `,
  styles: [`
  :host {

  }
  .head__cart-popup {
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-100%);
    height: 550px;
    width: 500px;
    padding-top: 40px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 128px;
    background-color: #f2f2f2;
    border-radius: 5px;
    cursor: default;
  }
  .head__popup-payment {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top:75%;
    color: white;
    font-size: 1.2em;
    padding-top: 15px;
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 15px;
    background-color: rgb(134, 165, 248);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .head__cards-wrapp {
    position: relative;

    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
  .hidden  {
    transform: scale(0, 0);
    top: -1000px;
    left: -1000px;
  }

  .head__cart-cards {
    max-width: 100%;
    height: 300px;
    padding: 0;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
  }
  .popup__head-close {
    padding-right: 5px;  
    cursor: pointer;
    margin-left: auto;
  }
  .popup__head {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    padding: 7px; 
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: rgb(134, 165, 248);
  }
  .popup__total-button {
    width: 100%;
    height: 40px;
  }
  .popup__total-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  `]
})
export class PopupCartComponent implements OnInit {

  btnColor: ButtonColorEnum = ButtonColorEnum.Warning
  
  
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    
  }

}
