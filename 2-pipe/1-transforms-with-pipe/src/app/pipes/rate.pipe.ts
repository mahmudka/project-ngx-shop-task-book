import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    if (value - Math.trunc(value) < 0.25) {
      value = Math.trunc(value);
    } else if (
      value - Math.trunc(value) >= 0.25 &&
      value - Math.trunc(value) < 0.75
    ) {
      value = Math.trunc(value) + 0.5;
    } else {
      value = Math.trunc(value) + 1;
    }

    return value;
  }
}
