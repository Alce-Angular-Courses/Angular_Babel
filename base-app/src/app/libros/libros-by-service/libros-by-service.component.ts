import { Component, OnInit } from '@angular/core';
import { GbooksService } from '../../servicios/gbooks.service';

@Component({
  selector: 'bbl-libros-by-service',
  templateUrl: './libros-by-service.component.html',
  styleUrls: ['./libros-by-service.component.css']
})
export class LibrosByServiceComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public gbook: GbooksService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.gbook.getLibros(this.clave)
    .then( (response: any) => this.aLibros = response );
  }

  buscarRx() {
    this.gbook.getLibrosRx(this.clave).subscribe(
      (response: any) => this.aLibros = response );
  }
}
