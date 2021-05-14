import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  template: `
    <div>
        <ul class="personal-list">
          <li class="personal-item foto" ><span class="personal-item__text">ваше фото: </span>  <span class="personal-item__img-wrapp"> <img class="personal-item__img" src="../../assets/pictures/smile.png"></span></li>
          <li class="personal-item"><span class="personal-item__text">имя: </span>  Иван</li>
          <li class="personal-item"><span class="personal-item__text">фамилия: </span>  Иванов</li>
          <li class="personal-item"><span class="personal-item__text">телефон: </span>  +7 999 999999</li>
          <li class="personal-item"><span class="personal-item__text">E-mail:</span>  example@email.com</li>
        </ul>
    </div>
  `,
  styles: [`
  :host {
    display: block;
    padding: 45px;
  }
  .foto {
    display:flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .personal-item__img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .personal-item__img-wrapp{
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .personal-item__text {
    display: inline-block;
    width:150px;
  }
  .personal-list {
    display:flex;
    flex-wrap: wrap;
    width:400px;
    align-items: center
  }
  .personal-item {
    height:60px;
    width:100%;
  }
  `]
})
export class PersonalDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
