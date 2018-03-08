import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PrinterIf, DptoIf } from '../../modelos/master.model';
import { Printers, Dptos } from '../../modelos/master.data';
import { OrderPrintIf } from '../../modelos/ordenprint.model';


@Component({
  selector: 'bbl-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  aPrinters: Array<PrinterIf>;
  aDptos: Array<DptoIf>;
  orderPrint: OrderPrintIf;
  @ViewChild('formPrinter') formulario: any;

  constructor() { }

  ngOnInit() {
    this.aPrinters = Printers;
    this.aDptos = Dptos;
    this.orderPrint = {
      user: {nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      dpto: {id: '', name: ''}
    };

    console.dir(this.formulario);
  }

  enviar() {
    console.log('Datos enviados');
  }

  borrar() {
    this.formulario.reset();
  }
}
