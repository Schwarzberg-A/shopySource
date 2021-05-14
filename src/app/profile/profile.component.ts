import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="profile-wrapp">
    <a routerLink="/profile" routerLinkActive='active'  class="profile">Персональные данные</a>
    <a routerLink="/profile/setting" routerLinkActive='active' class="profile">Настройки</a>
    <a routerLink="/profile/admin" routerLinkActive='active' class="profile">База данных</a>
  </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .profile {
    padding: 5px;
    margin-right: auto;
    font-size: 1.3em;
    font-weight: bold;
    color: rgb(2, 27, 168);
  }
  .profile-wrapp {
    display: flex;
  }
  .active {
    border-bottom: 2px solid rgb(2, 27, 168);
  }
  `
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
