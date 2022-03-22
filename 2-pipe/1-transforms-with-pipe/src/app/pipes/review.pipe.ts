import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
	public transform(_countOfReviews: number | undefined): string {
		if (!_countOfReviews) {
			return 'Нет отзывов';
		}

		const lastNumber = _countOfReviews % 10;
		const lastTwoNumber = _countOfReviews % 100;

		if (lastTwoNumber >= 11 && lastTwoNumber <= 14) {
			return `${_countOfReviews} отзывов`
		} 
		if (lastNumber === 1) {
			return `${_countOfReviews} отзыв`
		}
		if (lastNumber >=2 && lastNumber <=4) {
			return `${_countOfReviews} отзыва`
		}
		if (lastNumber === 5) {
			return `${_countOfReviews} отзывов`
		}

		return '';
	}
}

// feedbacksCount содержит число отзывов. 
// Напишите pipe, который будет добавлять слово отзыв в нужном падеже. 
// Например 1 отзыв, 11 отзывов и так далее.
