import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <ul >
        <li>Dropdown option one</li>
        <li>Dropdown option two</li>
        <li>Dropdown option three</li>
      </ul>
  `,
  styles: [`
  li {
    padding: 10px 15px 10px 15px;
  }
  ul {
    display: inline-block;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: 0 2px 5px gray;
    background-color: white;
  }
  `]
})
export class MenuComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
