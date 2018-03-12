import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainContactosComponent } from './main-contactos.component';
import { ListaComponent } from './lista/lista.component';
import { AltasComponent } from './altas/altas.component';
import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosService } from '../servicios/contactos.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ContactosRoutingModule
  ],
  declarations: [
    MainContactosComponent,
     ListaComponent,
     AltasComponent
  ],
  providers: [
    ContactosService
  ],
  exports: [
    MainContactosComponent
  ]
})
export class ContactosModule { }