import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos',
  template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ElementosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
