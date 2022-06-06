import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'router'
})
export class RouterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
