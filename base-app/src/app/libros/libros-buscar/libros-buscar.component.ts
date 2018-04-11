import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TruncarPipe } from '../../pipes/truncar.pipe';
import { map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'bbl-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})
export class LibrosBuscarComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar() {
    this.aLibros = [];
    const url =   this.urlBase + this.clave;
    this.http.get(url).toPromise()
    .then(
      (response: any) => {
        console.log(response);
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
      },
    )
    .catch((error) =>  console.log(error));

    this.clave = '';
  }

  buscarRx1() {
    this.aLibros = [];
    const url =   this.urlBase + this.clave;
    this.http.get(url).subscribe(
      (response: any) => {
        console.log(response);
        response.items.forEach(element => {
          this.aLibros.push(
            element.volumeInfo.title);
        });
      },
    );
    this.clave = '';
  }

  buscarRx() {
    this.aLibros = [];
    const url =   this.urlBase + this.clave;
    this.http.get(url).pipe(
      map( (response: any) => response.items)
    ) // Fin del pipe
    .pipe(
      map((response: any) => {
        const aDatos = [];
        response.forEach(element =>
          aDatos.push(element.volumeInfo.title)
        );
        return aDatos; }) // Fin del map
    ) // Fin del pipe
    .subscribe(
      (response: [any]) => this.aLibros = response
    );
    this.clave = '';
  }
}
