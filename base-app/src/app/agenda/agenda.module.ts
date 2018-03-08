import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AgendaRoutingModule
  ],
  declarations: [
    AgendaComponent,
    PipesComponent,
    TareasComponent
  ],
  exports: [
    AgendaComponent
  ]
})
export class AgendaModule { }
