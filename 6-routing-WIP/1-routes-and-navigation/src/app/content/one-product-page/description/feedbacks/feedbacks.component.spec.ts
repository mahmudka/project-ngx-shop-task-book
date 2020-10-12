import { StarRatingComponent } from './../../../../shared/components/star-rating/star-rating.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import { FeedbacksComponent } from './feedbacks.component';

import {
  IFeedback,
  oneProduct,
} from '../../../../../../../../shared/mocks/6-routing/product-information';
describe('[Moдуль 6 - Компонент отзывов товара]', () => {
  let fixture: ComponentFixture<FeedbacksComponent>;
  let component: FeedbacksComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbacksComponent, StarRatingComponent],
    });
    fixture = TestBed.createComponent(FeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод addNewFeedback ', () => {
    expect((component as any).addNewFeedback).toBeTruthy();
  });

  it('компонент должен иметь свойство feedbacks c значением []', () => {
    expect((component as any).feedbacks).toBeDefined();
    expect((component as any).feedbacks).toEqual([]);
  });
  it('компонент должен иметь cобственное событие addFeedbackEvent ', () => {
    expect((component as any).addFeedbackEvent).toBeTruthy();
    expect((component as any).addFeedbackEvent).toBeInstanceOf(EventEmitter);
  });

  // tslint:disable-next-line: max-line-length
  it('при нажатии на кнопку с селектором .submit должен вызываться метод  addNewFeedback и срабатывать собственное событие addFeedbackEvent', () => {
    (component as any).product = oneProduct;
    spyOn(component as any, 'addNewFeedback').and.callThrough();
    spyOn((component as any)?.addFeedbackEvent, 'emit').and.callThrough();
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('.submit'));
    submitButton.triggerEventHandler('click', null);
    expect((component as any)?.addNewFeedback).toHaveBeenCalledTimes(1);
    expect((component as any)?.addFeedbackEvent.emit).toHaveBeenCalledTimes(1);
  });

  it('должен правильно формироваться список для отзывов', () => {
    (component as any).feedbacks = oneProduct.feedbacks;
    fixture.detectChanges();
    const listElements: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.review-block')
    );
    expect(listElements).toBeTruthy();
    expect(listElements.length).toEqual((component as any).feedbacks.length);
  });

  it('тег с селектором .no-reviews должен отобразится при отсутствии отзывов', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const noReviewElement = fixture.debugElement.query(By.css('.no-reviews'));
    expect((component as any).product.feedbacks.length !== 0).toEqual(true);
    expect(noReviewElement).toBeTruthy();
  });

  it('тег с селектором .advantages  должен правильно интерполировать свойство advantages отзыва', () => {
    (component as any).feedbacks = oneProduct.feedbacks;
    fixture.detectChanges();
    expect((component as any).feedbacks.length === 0).toEqual(false);
    const listElements: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.advantages')
    );
    expect(listElements).toBeTruthy();
    (component as any).feedbacks.forEach((fb: IFeedback, index: number) => {
      expect(listElements[index].nativeElement.textContent.trim()).toEqual(
        fb.advantages
      );
    });
  });
});
