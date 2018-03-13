import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { ExtraComponent } from './extra/extra.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    AboutComponent,
    ExtraComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
