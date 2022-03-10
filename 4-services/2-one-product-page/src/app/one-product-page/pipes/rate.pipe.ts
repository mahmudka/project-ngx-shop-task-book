import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(value: number): number | undefined {
		let newValue = value;
		if (newValue - Math.trunc(newValue) < 0.25) {
			newValue = Math.trunc(newValue);
		} else if (newValue - Math.trunc(newValue) >= 0.25 && newValue - Math.trunc(newValue) < 0.75) {
			newValue = Math.trunc(newValue) + 0.5;
		} else {
			newValue = Math.trunc(newValue) + 1;
		}
		return newValue;
	}
}
