import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-agenda',
  template: `
  <div class="container">
    <div class="row">
      <bbl-tareas class="col-6"></bbl-tareas>
      <bbl-pipes class="col-6"></bbl-pipes>
    </div>
  </div>
  `,
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
