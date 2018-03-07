import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-inicio',
  template: `
  <div class="container">
    <div class="row">
      <bbl-saludo class="col-6"></bbl-saludo>
      <bbl-saludo-local class="col-6"></bbl-saludo-local>
    </div>
  </div>

  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
