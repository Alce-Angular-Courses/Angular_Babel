import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PrinterIf, DptoIf } from '../../modelos/master.model';
import { Printers, Dptos } from '../../modelos/master.data';

@Component({
  selector: 'bbl-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {

  formulario: FormGroup;
  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;

  constructor() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
   }

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos:  new FormControl(),
      telefono: new FormControl(),
      printer:  new FormControl(),
      isColor: new FormControl(),
      isClaro: new FormControl(),
      dpto: new FormControl(),
    });
  }

  enviar() {
    console.dir(this.formulario);
  }

  borrar() {}

}
