import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { products } from '../../../../../../../shared/mocks/6-routing/products';
import { RouterTestingModule } from '@angular/router/testing';

describe('[Moдуль 6 - Компонент рекомендуемого товара]', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод redirectTo ', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство product', () => {
    expect((component as any).product).toBeDefined(null);
  });

  it('тег c селекторор [.card-img-wrap img] должен иметь правильное связывание свойств src и alt', () => {
    (component as any).product = products[0];
    fixture.detectChanges();
    const imgEl = fixture.debugElement.query(By.css('.card-img-wrap img'));
    expect(imgEl).toBeTruthy();
    const { images, name } = (component as any)?.product;
    expect(imgEl.attributes.src).toEqual(images[0].url);
    expect(imgEl.attributes.alt).toEqual(name);
  });

  it('тег с селектором .card-title  должен правильно интерполировать свойство name продукта', () => {
    (component as any).product = products[0];
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.card-title'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  it('тег с селектором .rate .rate-amount  должен правильно интерполировать свойство feedbacksCount продукта', () => {
    (component as any).product = products[0];
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.rate .rate-amount'));
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.feedbacksCount} отзыва`
    );
  });

  it('тег с селектором .product-price strong  должен правильно интерполировать свойство price продукта', () => {
    (component as any).product = products[0];
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(
      By.css('.product-price strong')
    );
    expect(prodNameEL).toBeTruthy();
    expect(prodNameEL.nativeElement.textContent.trim()).toEqual(
      `${(component as any)?.product.price}€`
    );
  });
});
