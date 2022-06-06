import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class RouterPipe implements PipeTransform {
  transform(valor: string):string{
    valor=valor.toLowerCase()
    valor=valor.replace(" ",'_')
    return valor;
  }

}
