import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
	public transform(_countOfReviews: number | undefined): string {
		const titles = ['отзыв', 'отзыва', 'отзывов'];
		const cases = [2, 0, 1, 1, 1, 2];

		if (!Number.isFinite(_countOfReviews) || _countOfReviews === 0) {
			return 'Нет отзывов';
		}
		if (typeof _countOfReviews === 'number') {
			const title =
				_countOfReviews % 100 > 4 && _countOfReviews % 100 < 20
					? 2
					: cases[_countOfReviews % 10 < 5 ? _countOfReviews % 10 : 5];

			return `${_countOfReviews} ${titles[title as number]}`;
		}
		return '';
	}
}
