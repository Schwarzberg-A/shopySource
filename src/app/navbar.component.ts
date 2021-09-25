import { Component, OnInit } from '@angular/core';
import { toggles, Toggles } from './others/toggles';
import { CartService } from './servises/cart.service';
import { Store, select } from '@ngrx/store';
import * as fromApp from './store/reducers';
import { User } from './store/reducers/user.reducers';
import { UserSelectors } from './store/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  template: `
<div class="head">
  <nav class="nav-bar">
    <ul class="nav-bar__list">
      <li class="nav-bar__item"><a class="nav-bar__link" routerLink="/">Home</a></li>
      <li class="nav-bar__item"><a class="nav-bar__link" routerLink="/catalog">Catalog</a></li>
      <li class="nav-bar__item search"><app-search></app-search></li>
      <li class="nav-bar__item favorite"><a class="nav-bar__link " routerLink="/favorite"><img width='30px' src="../../assets/pictures/favorite+.svg"></a></li>
      <li class="nav-bar__item head__cart-wrapp">

        <div class="head__cart" (click)="cartService.togglePopup()">
          <div *ngIf="cartService.count" class="numberOfPurchases">
            {{cartService.count}}
          </div>
        </div>
        <app-popup-cart (popclosed)="cartService.close()"></app-popup-cart>
      </li>
      <li class="nav-bar__item profile">
        <a class="nav-bar__link" routerLink="/profile">
          <img class='profile__img' src="../assets/pictures/profile.png">
        </a>
        <div>
          <a class="nav-bar__link" routerLink="/profile">
            Личный кабинет
          </a>
          <div class="hello" *ngIf="user$ | async as user">
            <span  *ngIf="user.login">
              hello, Mr. {{user.login}}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</div>
  `,
  styles: [`
  .head {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  height: 100px;
  width: 100vw;
  padding-left: 55px;
  padding-right: 55px;
  background-image: linear-gradient( to left, #2980B9, #6DD5FA, #FFFFFF)
}
.head__cart {
  display: flex;
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(../assets/pictures/cart.png)
}
.head__cart-wrapp {
  display: inline-block;
}

.numberOfPurchases {
  margin-left: auto;
  margin-top: auto;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 1;
  color: white;
  background-color: red;
  border-radius: 3px;
}

:host, .nav-bar, .nav-bar__list {
  display: flex;
  width: 100%;
  align-items: center;
}
.nav-bar__item:not(:last-child) {
  margin-right: 35px;
}
.nav-bar__link {
  display: inline-block;
  color: gray;
  font-size: 1.6em;
}

.hello {
  color: white;
}

.favorite {
  margin-bottom: -5px;
}

.search {
  margin-left: auto;
}

.profile {
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile a{
  color: white;
  font-size: 1.2em;
}
.profile__img {
  width:30px;
  /* margin-bottom: -7px; */
  margin-right: 7px;
}
  `]
})
export class NavbarComponent implements OnInit {
  toggles: Toggles[] = toggles
  popupIsOpen: boolean = this.cartService.popupIsOpen
  user$: Observable<User> = this.store.pipe(select(UserSelectors.selectUserState))
  // user: any = null
  constructor( public cartService: CartService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    // this.user$.subscribe(resp => this.user = resp)
  }

}
