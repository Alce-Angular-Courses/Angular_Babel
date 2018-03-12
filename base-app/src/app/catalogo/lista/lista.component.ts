import { Component, OnInit } from '@angular/core';
import { Book } from '../../modelos/books.model';
import { CatalogoService } from '../../servicios/catalogo.service';

@Component({
  selector: 'bbl-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aBooks: Array<Book>;

  constructor(private catalogo: CatalogoService) { }

  ngOnInit() {
    this.aBooks = this.catalogo.getBooks();
  }

}
