import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CatalogoComponent },
  { path: 'book/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
