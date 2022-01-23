import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(value: number | undefined): number | undefined {
		return Math.round(value ?? 0);
	}
}
