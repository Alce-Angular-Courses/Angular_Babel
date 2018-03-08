import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrinterComponent } from './printer.component';

const routes: Routes = [
  { path: '', component: PrinterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrinterRoutingModule { }
