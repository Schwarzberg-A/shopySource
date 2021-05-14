import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
  <div class="homepage">
    <img src="https://portal.mi-room.ru/wp-content/uploads/2019/03/m8exluspm6w.jpg">
    <img src="https://www.hotevents.ru/img/m/mvideo/mvideo_2012-08-22_1.jpg">
    <img src="https://doit.ua/files/images/portfolio/3/3778v414785c4.jpg">
  </div>
  `,
  styles: [`
  :host {
    display: block;
    width: 100%;
  }
  .homepage {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  `]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
