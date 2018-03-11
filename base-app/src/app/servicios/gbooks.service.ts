import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GbooksService {


  urlBase: string;
  aLibros: Array<string>;
  constructor(public http: HttpClient) {
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibrosBasic(clave: string): any {
    this.aLibros = [];
    const url =   this.urlBase + clave;
    return this.http.get(url).toPromise();
  }

  getLibros(clave: string): any {
    this.aLibros = [];
    const url =   this.urlBase + clave;

    return this.http.get(url).toPromise()
    .then(
      (response: any) => {
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
        return new Promise ((resolve, reject) => resolve(this.aLibros));
      },
    );
  }

}
