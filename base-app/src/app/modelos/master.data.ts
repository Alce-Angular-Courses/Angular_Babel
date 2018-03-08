import { PrinterIf, DptoIf, Printer } from './master.model';

export const Printers: Array<PrinterIf> = [
    {id: '1' , name: 'HP'},
    new Printer('2', 'Brother'),
    new Printer('2', 'Lexmark')
];

export const Dptos: Array<DptoIf> = [
    {id: '1' , name: 'RRHH'},
    {id: '2' , name: 'Ventas'},
    {id: '3' , name: 'Marketing'},
    {id: '4' , name: 'Sistemas'}
];
