import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncarPipe } from './truncar.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TruncarPipe],
  exports: [ TruncarPipe ]
})
export class PipesModule { }
