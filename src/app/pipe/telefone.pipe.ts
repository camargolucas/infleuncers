import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(phone: string): string {
    
    let ret = '('+phone.substring(0, 2)+') '+
              phone.substring(2, 6)+'-'+
              phone.substring(6, 10);
    
    return ret;
  }
}
