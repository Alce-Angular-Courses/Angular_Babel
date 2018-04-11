import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// import * as Rx from 'rxjs/operators';
// equivalente en node Rx=require(rxjs/operators)

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

  getLibrosRx(clave: string): Observable<Object> {
    this.aLibros = [];
    const url =   this.urlBase + clave;

    return this.http.get<Object>(url).pipe(
      map( response => this.extractTitles(response) )
    );
  }

  private extractTitles(response: any) {
    if (response.items) {
      return response.items.map(book => book.volumeInfo.title);
    } else {
      return response;
    }
  }
}
