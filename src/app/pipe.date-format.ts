import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateHHmm'
})
export class DateFormat implements PipeTransform {
  transform(value:Date, args:string[]):string {
    if (value) {
      return this.to2Digits(value.getHours()) + ":" + this.to2Digits(value.getMinutes());
    }
  }

  to2Digits(value: number):string {
    let result = "" + value;
    if (result.length == 1) {
      result = "0"+result;
    }
    return result;
  }
}