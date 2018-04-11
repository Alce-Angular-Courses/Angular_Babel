import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrinterRoutingModule } from './printer-routing.module';
import { PrinterComponent } from './printer.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMdComponent } from './form-md/form-md.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrinterRoutingModule
  ],
  declarations: [
    PrinterComponent,
    FormTdComponent,
    FormMdComponent
  ],
  exports: [
    PrinterComponent
  ]
})
export class PrinterModule { }
