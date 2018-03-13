import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-about',
  template: `
  <div class="container">
    <div class="row">
      <bbl-extra></bbl-extra>
    </div>
  </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
