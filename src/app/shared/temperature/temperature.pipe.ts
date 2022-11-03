import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: boolean) {
    if (value && !isNaN(value)) {
      if (unit) {
        var tempareature = (value - 32) / 1.8;
        return tempareature.toFixed(2);
      } else {
        var tempareature = value * 32 + 1.8;
        return tempareature.toFixed(2);
      }
    }
    return;
  }
}
