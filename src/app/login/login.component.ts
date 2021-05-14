import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class='login-wrapp'>
      <input class='login-item input' type='text' name='login' placeholder='login'>
      <input class='login-item input' type='text' name='password' placeholder='password'>
      <button class='login-item btn'>войти</button>
      <a class='login-item' routerLink="/sign-in">зарегистироваться</a>
    </div>
  `,
  styles: [`
    :host {
      display: flex; 
      height: 100%;
      flex-wrapp: wrapp;
    }
    .login-wrapp {
      margin: auto;
      width: 300px;
    }
    .login-item {
      display: inline-block;
      width: 100%;
      height: 40px;
      margin-bottom: 15px;
      text-align: center;
      border-radius: 5px;
    }
    .input {
      padding-left: 15px;
      padding-right: 15px;
      border: 1px solid gray;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
