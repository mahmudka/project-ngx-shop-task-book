import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(_value: number): number | undefined {
		const rating = _value;
		const ratingAfterDot = rating % 1;
		if (ratingAfterDot < 0.25) {
			return Math.trunc(rating);
		} else if (ratingAfterDot >= 0.25 && ratingAfterDot < 0.75) {
			return Math.trunc(rating) + 0.5;
		} else {
			return Math.trunc(rating) + 1;
		}
		return rating;
	}
}
