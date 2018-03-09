import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-comunics',
  template: `
  <div class="container">
    <div class="row">
      <bbl-padre class="col-6"></bbl-padre>
    </div>
  </div>
  `,
  styles: []
})
export class ComunicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
