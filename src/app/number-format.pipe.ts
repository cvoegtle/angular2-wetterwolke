import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let digits = args != undefined ? args  : 1;
    let formatted = "";
    if (value != null) {
      formatted = value.toFixed(digits);
    }
    return formatted.replace("\.", ",");
  }

}
