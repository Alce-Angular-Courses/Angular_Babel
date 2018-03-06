import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [
    CatalogoComponent
  ],
  exports: [
    CatalogoComponent
  ]
})
export class CatalogoModule { }
