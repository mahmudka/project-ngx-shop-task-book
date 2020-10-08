import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    const numOfReviews = countOfReviews ?? 0;
    const strNumOfReviews = numOfReviews.toString();
    let lastNumOfReviews = Number(
      strNumOfReviews.toString().slice(strNumOfReviews.length - 2)
    );
    if (lastNumOfReviews === 0) {
      return 'Нет отзывов';
    }
    if (lastNumOfReviews >= 11 && lastNumOfReviews < 15) {
      return `${numOfReviews} отзывов`;
    }
    lastNumOfReviews = Number(
      strNumOfReviews.toString().slice(strNumOfReviews.length - 1)
    );
    if (lastNumOfReviews === 1) {
      return `${numOfReviews} отзыв`;
    }
    if (lastNumOfReviews > 1 && lastNumOfReviews < 5) {
      return `${numOfReviews} отзыва`;
    }
    if (
      (lastNumOfReviews > 1 && lastNumOfReviews < 5) ||
      lastNumOfReviews >= 5
    ) {
      return `${numOfReviews} отзывов`;
    }
    return `Нет отзывов`;
  }
}
