import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let formatted:string = value.toFixed(1);
    return formatted.replace("\.", ",");
  }

}
