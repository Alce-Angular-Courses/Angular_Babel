import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../modelos/books.model';
import { CatalogoService } from '../../servicios/catalogo.service';

@Component({
  selector: 'bbl-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  oBook: Book;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private catalogo: CatalogoService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.oBook = this.catalogo.getBook(id);
    } else {
      this.oBook = {id: 0, title: '', autor: '',  description: ''};
    }
  }

    gotoBooks() {
    this.router.navigateByUrl('/catalogo');
  }

}
