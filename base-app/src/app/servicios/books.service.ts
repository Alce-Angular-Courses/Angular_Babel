import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular Avanzado',
      'Aprendiendo Angular',
      'Mastering Angular',
      'Angular Ninja'
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

  getLibrosAsinc(clave: string) {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (Math.random() > 0.5) {
          resolve(this.aLibros);
        } else {
          reject('Esto es un error');
        }
      }, 1000);
    });
  }
}
