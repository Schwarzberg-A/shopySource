import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-error',
  template: `
    <span class='message'>
      {{message}}
    </span>
  `,
  styles: [`
  :host {
    display: flex;
    margin-bottom: 15px;
  }
    .message {
      color: orange;
      margin-bottom: auto;
      margin-right: auto;
    }
  `]
})
export class NgxErrorComponent implements OnInit {
  @Input() message: string

  constructor() { }

  ngOnInit(): void {
  }

}
