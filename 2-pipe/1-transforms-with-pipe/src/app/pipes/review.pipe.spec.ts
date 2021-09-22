import { ReviewPipe } from './review.pipe';

describe('[Moдуль 2 - review pipe]', () => {
	let reviewPipe: ReviewPipe;
	beforeEach(() => {
		reviewPipe = new ReviewPipe();
	});
	it('Eсли значение к которому применяется pipe 0 или undefined то pipe должен возвращать "Нет отзывов', () => {
		expect(reviewPipe.transform(undefined)).toEqual('Нет отзывов');
		expect(reviewPipe.transform(0)).toEqual('Нет отзывов');
	});
	it('Eсли значение к которому применяется pipe число которое заканичвается на 1  pipe должен возвращать "${count} отзыв"', () => {
		expect(reviewPipe.transform(1)).toEqual('1 отзыв');
		expect(reviewPipe.transform(21)).toEqual('21 отзыв');
		expect(reviewPipe.transform(31)).toEqual('31 отзыв');
		expect(reviewPipe.transform(91)).toEqual('91 отзыв');
	});

	it('Eсли значение к которому применяется pipe число которое заканичвается на 11-14  pipe должен возвращать "${count} отзывов"', () => {
		expect(reviewPipe.transform(11)).toEqual('11 отзывов');
		expect(reviewPipe.transform(12)).toEqual('12 отзывов');
		expect(reviewPipe.transform(13)).toEqual('13 отзывов');
		expect(reviewPipe.transform(14)).toEqual('14 отзывов');
		expect(reviewPipe.transform(111)).toEqual('111 отзывов');
	});

	it('Eсли значение к которому применяется pipe число которое кратное 5 pipe должен возвращать "${count} отзывов"', () => {
		expect(reviewPipe.transform(5)).toEqual('5 отзывов');
		expect(reviewPipe.transform(15)).toEqual('15 отзывов');
		expect(reviewPipe.transform(25)).toEqual('25 отзывов');
		expect(reviewPipe.transform(115)).toEqual('115 отзывов');
	});
	it('Eсли значение к которому применяется pipe число заканчиваеться на 2 - 4  pipe должен возвращать "${count} отзыва"', () => {
		expect(reviewPipe.transform(2)).toEqual('2 отзыва');
		expect(reviewPipe.transform(34)).toEqual('34 отзыва');
		expect(reviewPipe.transform(44)).toEqual('44 отзыва');
		expect(reviewPipe.transform(93)).toEqual('93 отзыва');
	});
});
