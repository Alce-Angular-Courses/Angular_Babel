import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { ListaComponent } from './lista/lista.component';
import { DetailsComponent } from './details/details.component';
import { CatalogoService } from '../servicios/catalogo.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ],
  declarations: [
    CatalogoComponent,
    ListaComponent,
    DetailsComponent],
  providers: [
      CatalogoService
    ]
})
export class CatalogoModule { }
