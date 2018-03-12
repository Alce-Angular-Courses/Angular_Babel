import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContactosComponent } from './main-contactos.component';

const routes: Routes = [
  { path: '', component: MainContactosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosRoutingModule { }
