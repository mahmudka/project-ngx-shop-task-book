import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';
import { oneProduct } from '../../../../../../../shared/mocks/3-directives/product';

describe('[Moдуль 3 -  Компонент рейтинга товара]', () => {
	let fixture: ComponentFixture<StarRatingComponent>;
	let component: StarRatingComponent;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [StarRatingComponent],
		}).overrideComponent(StarRatingComponent, {
			set: { changeDetection: ChangeDetectionStrategy.Default },
		});
		fixture = TestBed.createComponent(StarRatingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('компонент должен иметь метод highlight ', () => {
		expect((component as any).highlight).toBeTruthy();
	});

	it('компонент должен иметь собстевенное свойство feedbackRate c значением  0', () => {
		expect((component as any).feedbackRate).toBeDefined();
		expect((component as any).feedbackRate).toEqual(0);
	});

	it('компонент должен иметь свойство stars c значением [0, 1, 2, 3, 4]', () => {
		expect((component as any).stars).toBeDefined();
		expect((component as any).stars).toEqual([0, 1, 2, 3, 4]);
	});

	it('Количество звезд должно соответсвовать свойству stars компонента', () => {
		fixture.detectChanges();
		const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('span.fa.fa-star'));
		expect(stars).toBeTruthy();
		expect(stars.length).toEqual(5);
	});

	it('метод highlight должен вызываться для каждого элемента span.fa.fa-star', () => {
		spyOn(component as any, 'highlight').and.callThrough();
		(component as any).feedbackRate = oneProduct.rating;
		fixture.detectChanges();
		expect((component as any)?.highlight).toHaveBeenCalledTimes(10);
	});

	it('количество активных звезд должно быть равным округленному рейтингу  (округление стандартное)', () => {
		(component as any).feedbackRate = oneProduct.rating;
		fixture.detectChanges();
		const stars: DebugElement[] = fixture.debugElement.queryAll(By.css('span.fa.fa-star.selected'));
		expect(stars).toBeTruthy();
		expect(stars.length).toEqual(Math.round(oneProduct.rating));
	});
});
