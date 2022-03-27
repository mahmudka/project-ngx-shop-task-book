import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(value: number): number | undefined {
		const ratingAfterDot = value % 1;

		if (ratingAfterDot < 0.25) {
			return Math.trunc(value);
		}
		if (ratingAfterDot >= 0.25 && ratingAfterDot < 0.75) {
			return Math.trunc(value) + 0.5;
		}
		return Math.trunc(value) + 1;
	}
}
