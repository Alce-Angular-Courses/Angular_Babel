import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-printer',
  template: `
  <div class="container">
    <div class="row">
      <bbl-form-td class="col-6"></bbl-form-td>
      <bbl-form-md class="col-6"></bbl-form-md>
    </div>
  </div>
  `,
  styles: []
})
export class PrinterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
