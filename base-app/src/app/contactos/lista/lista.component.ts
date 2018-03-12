import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbl-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  sTitle: string;
  sEtiquetaBtn: string;
  @Input() aItems: Array<any>;
  @Output() outBorrarItem: EventEmitter<number>;

  constructor() {
    this.outBorrarItem = new EventEmitter();
  }

  ngOnInit() {
    this.sTitle = 'Contactos personales';
    this.sEtiquetaBtn = 'Eliminar';
  }

  deleteItem(i) {
    this.outBorrarItem.emit(i);
  }
}
