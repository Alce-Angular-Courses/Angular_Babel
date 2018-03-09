import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'catalogo', loadChildren: './catalogo/catalogo.module#CatalogoModule' },
  { path: 'comunics', loadChildren: './comunics/comunics.module#ComunicsModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule' },
  { path: 'printer', loadChildren: './printer/printer.module#PrinterModule' },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
