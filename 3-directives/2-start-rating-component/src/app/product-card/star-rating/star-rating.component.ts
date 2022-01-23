import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'ngx-shop-star-rating',
	templateUrl: './star-rating.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
	public stars?: number[] = [0, 1, 2, 3, 4];

	@Input()
	public feedbackRate: number | undefined = 0;

	public highlight(index: number): boolean {
		return index + 1 < Math.round(this.feedbackRate as number);
	}
}
