import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { oneProduct } from '../../../../../shared/mocks/2-pipes/product';
import { ImgUrlPipe } from '../pipes/img-url.pipe';
import { ReviewPipe } from '../pipes/review.pipe';
import { RatePipe } from '../pipes/rate.pipe';

describe('[Moдуль 2]  Компонент продукта', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent, ImgUrlPipe, ReviewPipe, RatePipe],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод redirectTo ', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь собственное событие goToProduct ', () => {
    expect((component as any).goToProduct).toBeTruthy();
    expect((component as any).goToProduct).toBeInstanceOf(EventEmitter);
  });

  it('компонент должен иметь свойство product c значением {}', () => {
    expect((component as any).product).toBeDefined();
  });

  it('при нажатии на блок с селектором .go-to-product должен вызываться метод  redirectTo и срабатывать собстевнное событие goToProduct',
    () => {
      spyOn(component as any, 'redirectTo').and.callThrough();
      spyOn((component as any)?.goToProduct, 'emit').and.callThrough();
      const incrementButton = fixture.debugElement.query(By.css('div.go-to-product'));
      incrementButton.triggerEventHandler('click', null);
      expect((component as any)?.redirectTo).toHaveBeenCalledTimes(1);
      expect((component as any)?.goToProduct.emit).toHaveBeenCalledTimes(1);
    });

  it('тег c селекторор [.card-img-wrap img] должен иметь правильное связывание свойств src и alt', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.css('.card-img-wrap img'));
    expect(imgEl).toBeTruthy();
    const {
      images: [{url}],
      name,
    } = (component as any)?.product;
    expect(imgEl.attributes.src).toEqual(url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .card-title  должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.card-title'));
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
      `${(component as any)?.product.feedbacksCount} отзыва`
    );
  });

  it('тег с селектором .product-price strong  должен правильно интерполировать свойство price продукта', () => {
    (component as any).product = oneProduct;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.product-price strong'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.price}€`
    );
  });

});
