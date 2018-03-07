import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'bbl-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  sNombre: string;
  user: any;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Luis';
    this.user = {name: 'Pepe', apellidos: 'Perez'};
  }

  btnBorrar() {
    this.sNombre = '';
  }
}
