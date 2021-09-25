import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { logInsuccess } from '../store/actions/user.action';
import * as fromUser from '../store/reducers/user.reducers';

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="logInForm" class='login-wrapp' (ngSubmit)="logIn()">
      <input class='login-item input' formControlName='login' type='text' name='login' placeholder='login'>
      <input class='login-item input'  formControlName='password' type='text' name='password' placeholder='password'>
      <button class='login-item btn'>войти</button>
      <a class='login-item' routerLink="/sign-in">зарегистироваться</a>
    </form>
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
  logInForm: FormGroup = this.fb.group({
    login: '',
    password: '',
  })

  logIn() {
    this.store.dispatch(logInsuccess({ user: this.logInForm.value }))
  }

  constructor(private store: Store<fromUser.User>, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
