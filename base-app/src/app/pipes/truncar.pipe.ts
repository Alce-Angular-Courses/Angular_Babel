import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(texto: string, limit = 10): any {
    return (texto.length > limit) ? texto.substr(0, limit) + '...' : texto;

  }

}
