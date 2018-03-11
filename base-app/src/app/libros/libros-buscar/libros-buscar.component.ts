import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TruncarPipe } from '../../pipes/truncar.pipe';

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

  buscarRx() {
    this.aLibros = [];
    const url =   this.urlBase + this.clave;
    this.http.get(url)
    .subscribe(
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

}
