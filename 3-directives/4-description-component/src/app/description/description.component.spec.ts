import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { oneProduct } from '../../../../../shared/mocks/3-directives/product-information';
import { DescriptionComponent } from './description.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

describe('[Moдуль 3 - Компонент описания товара]', () => {
  let fixture: ComponentFixture<DescriptionComponent>;
  let component: DescriptionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescriptionComponent, FeedbacksComponent],
    });
    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод addFeedback ', () => {
    expect((component as any).addFeedback).toBeTruthy();
  });

  it('компонент должен иметь метод toggleTab ', () => {
    expect((component as any).toggleTab).toBeTruthy();
  });

  it('компонент должен иметь свойство product c значением null', () => {
    expect((component as any).product).toBeDefined();
    expect((component as any).product).toEqual(null);
  });
  it('компонент должен иметь свойство isShowDescription c значением true', () => {
    expect((component as any).isShowDescription).toBeDefined();
    expect((component as any).isShowDescription).toEqual(true);
  });
  it('компонент должен иметь cобственное событие addFeedbackEvent ', () => {
    expect((component as any).addFeedbackEvent).toBeTruthy();
    expect((component as any).addFeedbackEvent).toBeInstanceOf(EventEmitter);
  });

  // tslint:disable-next-line: max-line-length
  it('при нажатии на кнопку с селектором .description должен вызываться метод toggleTab и значение свойства isShowDescription должно быть false', () => {
    expect((component as any).isShowDescription).toBeDefined();
    spyOn(component as any, 'toggleTab').and.callThrough();
    fixture.detectChanges();
    const showButton = fixture.debugElement.query(By.css('.description'));
    showButton.triggerEventHandler('click', null);
    expect((component as any)?.toggleTab).toHaveBeenCalledTimes(1);
    expect((component as any).isShowDescription).toEqual(false);
  });

  // tslint:disable-next-line: max-line-length
  it('при нажатии на кнопку с селектором .feedbacks должен вызываться метод toggleTab, значение свойства isShowDescription должно быть true и должен отобразится компонент FeedbacksComponent', () => {
    spyOn(component as any, 'toggleTab').and.callThrough();
    const showButton = fixture.debugElement.query(By.css('.feedbacks'));
    showButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect((component as any)?.toggleTab).toHaveBeenCalledTimes(1);
    expect((component as any).isShowDescription).toEqual(false);
    const addFeedbackComponent = fixture.debugElement.query(
      By.css('.add-feedback-block')
    );
    expect(addFeedbackComponent).toBeDefined();
  });

  it('тег с селектором .product-description  должен правильно интерполировать свойство description продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-description')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      (component as any)?.product.description
    );
  });

  it('тег с селектором .feedbacks  должен правильно интерполировать свойство feedbacksCount продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.feedbacks'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `Отзывы ${(component as any)?.product.feedbacksCount}`
    );
  });
});
