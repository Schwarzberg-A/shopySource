import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
    <form class='sign-up-wrapp' (input)='input()' [ngFormOptions]="{updateOn: 'blur'}" #form='ngForm' (ngSubmit)='sendForm(form)'>

      <input
      class='sign-up-item input'
      type='text'
      name='name'
      placeholder='Фамилия Имя'
      #name='ngModel'
      pattern="[a-zа-яё ]*"
      required
      minlength="3"
      ngModel>

      <app-ngx-error
      *ngIf="name.hasError('pattern') && form.submitted"
      message="только латинские буквы или кирилица"
      ></app-ngx-error>

      <app-ngx-error
      *ngIf="name.hasError('required') && form.submitted"
      message="заполните обязательное поле"
      ></app-ngx-error>

      <app-ngx-error
      *ngIf="name.hasError('minlength') && form.submitted "
      message='минимальная длинна 3 символа'
      ></app-ngx-error>


      <input
      class='sign-up-item input'
      type='email'
      name='email'
      #email='ngModel'
      email
      required
      placeholder='E-mail'
      ngModel>

      <app-ngx-error
      *ngIf="email.hasError('required') && form.submitted "
      message="введите E-mail"
      ></app-ngx-error>

      <app-ngx-error
      *ngIf="email.hasError('email') && form.submitted "
      message='некорректный e-mail'
      ></app-ngx-error>

      <ng-container
      #passwordGroup='ngModelGroup'
      ngModelGroup='password'
      appPasswordMatch
      >
      <div>
        <input
        class='sign-up-item input'
        type='password'
        name='password'
        #password='ngModel'
        placeholder='пароль'
        required
        pattern="^.*(?=.{8,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=./]).*$"
        ngModel>

        <app-ngx-error
        *ngIf="password.hasError('pattern') && form.submitted"
        message="минимум восемь символов, должен состоять из латинских букв разного регистра, содержать минимум одну цифру и один спецсимвол."
        ></app-ngx-error>

        <app-ngx-error
        *ngIf="password.hasError('required') "
        message="придумайте пароль"
        ></app-ngx-error>
      </div>

      <div>
        <input
        class='sign-up-item input'
        type='password'
        name='confirm'
        #confirm='ngModel'
        placeholder='повторите пароль'
        required
        ngModel>

        <app-ngx-error
        *ngIf="confirm.hasError('required') "
        message="повторите пароль"
        ></app-ngx-error>
      </div>

      </ng-container>

      <button class='sign-up-item' type='submit' routerLink="/sign-in" >зарегистироваться</button>
    </form>
    AsdC12./da
  `,
  styles: [`
    .ngx {
      display: block;
    }
    :host {
      display: flex;
      height: 100%;
      flex-wrapp: wrapp;
    }
    .sign-up-wrapp {
      margin: auto;
      width: 300px;
    }
    .sign-up-item {
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
export class SignInComponent implements OnInit {
  public changed:boolean = false;
  public forma
  // public user ={
  //   name: 'John Doe',
  //   email: 'johndoe@mail.com'
  // }

  sendForm(form: NgForm) {
    console.log(form)
  }

  input() {
    this.changed = false;
    for (let i = 0; i < this.forma.elements.length; i++) {
      if (this.forma.elements[i].value) {
        this.changed = true;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.forma = document.querySelector('.sign-up-wrapp')

  }

}
