import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
	public transform(_value: number): number | undefined {
		return Math.round(_value / 0.5) * 0.5;
	}
}
