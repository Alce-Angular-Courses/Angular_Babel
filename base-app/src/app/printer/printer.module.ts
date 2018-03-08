import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PrinterRoutingModule
  ],
  declarations: [
    PrinterComponent,
    FormTdComponent
  ],
  exports: [
    PrinterComponent
  ]
})
export class PrinterModule { }
