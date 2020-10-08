import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { InformationComponent } from './information.component';
import { oneProduct } from '../../../../../shared/mocks/3-directives/product-information';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ReviewPipe } from '../pipes/review.pipe';
import { RatePipe } from '../pipes/rate.pipe';

describe('[Moдуль 3 - Компонент информации о товаре]', () => {
  let fixture: ComponentFixture<InformationComponent>;
  let component: InformationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        InformationComponent,
        StarRatingComponent,
        ReviewPipe,
        RatePipe,
      ],
    });
    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод addToBasket ', () => {
    expect((component as any).addToBasket).toBeTruthy();
  });

  it('компонент должен иметь метод show ', () => {
    expect((component as any).show).toBeTruthy();
  });

  it('компонент должен иметь свойство product c значением null', () => {
    expect((component as any).product).toBeDefined();
    expect((component as any).product).toEqual(null);
  });
  it('компонент должен иметь свойство isShow c значением false', () => {
    expect((component as any).isShow).toBeDefined();
    expect((component as any).isShow).toEqual(false);
  });
  it('компонент должен иметь cобственное событие addToCart ', () => {
    expect((component as any).addToCart).toBeTruthy();
    expect((component as any).addToCart).toBeInstanceOf(EventEmitter);
  });

  it('при нажатии на кнопку с селектором .submit должен вызываться метод  addToBasket и срабатывать собственное событие addToCart', () => {
    (component as any).product = oneProduct;
    spyOn(component as any, 'addToBasket').and.callThrough();
    spyOn((component as any)?.addToCart, 'emit').and.callThrough();
    fixture.detectChanges();
    const submitButton = fixture.debugElement.query(By.css('.submit'));
    submitButton.triggerEventHandler('click', null);
    expect((component as any)?.addToBasket).toHaveBeenCalledTimes(1);
    expect((component as any)?.addToCart.emit).toHaveBeenCalledTimes(1);
  });

  // tslint:disable-next-line: max-line-length
  it('при нажатии на кнопку с селектором .show-characters должен вызываться метод  show и значение свойства isShow должно быть true', () => {
    expect((component as any).isShow).toBeDefined();
    spyOn(component as any, 'show').and.callThrough();
    fixture.detectChanges();
    const showButton = fixture.debugElement.query(By.css('.show-characters'));
    showButton.triggerEventHandler('click', null);
    expect((component as any)?.show).toHaveBeenCalledTimes(1);
    expect((component as any).isShow).toEqual(true);
  });

  // tslint:disable-next-line: max-line-length
  it('при нажатии на кнопку с селектором .show-characters должна появится кнопка с селектором .hide-characters, при нажатии на нее должен вызываться метод show и значение свойства isShow должно быть false', () => {
    spyOn(component as any, 'show').and.callThrough();
    const showButton = fixture.debugElement.query(By.css('.show-characters'));
    showButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    const hideButton = fixture.debugElement.query(By.css('.hide-characters'));
    expect(hideButton).toBeDefined();
    hideButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect((component as any)?.show).toHaveBeenCalledTimes(2);
    expect((component as any).isShow).toEqual(false);
  });

  it('тег с селектором .product-info .product-name  должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-info .product-name')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  it('тег с селектором .rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.feedbacksCount} отзывa`
    );
  });

  it('тег с селектором .price-text  должен правильно интерполировать свойство price продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.price-text'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `€${(component as any)?.product.price}.00`
    );
  });
});
