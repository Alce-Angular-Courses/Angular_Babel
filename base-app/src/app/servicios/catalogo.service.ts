import { Injectable } from '@angular/core';
import { Book } from '../modelos/books.model';
import { BOOKS } from '../modelos/Books.data';

@Injectable()
export class CatalogoService {

  private aBooks: Array<Book>;

  constructor() {
    this.aBooks = BOOKS;
  }

  getBooks() {
    return this.aBooks;
  }

  getBook(id: number | string) {
    return this.aBooks.find(book => book.id === +id);
  }

}
