import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bbl-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  urlBase: string;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.urlBase = 'https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=206974-0-agenda-eventos-culturales-100&mgmtid=6c0b6d01df986410VgnVCM2000000c205a0aRCRD&preview=full';
    this.urlBase = 'http://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json';
    this.urlBase = 'http://datos.madrid.es/egob/catalogo/201747-0-bibliobuses-bibliotecas.json';
    this.http.get(this.urlBase).toPromise()
    .then( response => console.log(response))
    .catch( error => console.log(error));
  }

}
