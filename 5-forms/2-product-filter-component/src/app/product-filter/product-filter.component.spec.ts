import { PriceInputsComponent } from './price-slider/price-inputs/price-inputs.component';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { ProductFilterComponent } from './product-filter.component';
import { BrandsComponent } from './brands/brands.component';
import { Ng5SliderModule } from 'ng5-slider';

describe('[Moдуль 5 - Компонент фильтрации товаров]', () => {
  let fixture: ComponentFixture<ProductFilterComponent>;
  let component: ProductFilterComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductFilterComponent,
        PriceSliderComponent,
        BrandsComponent,
        PriceInputsComponent,
      ],
      imports: [Ng5SliderModule, ReactiveFormsModule, FormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    });
    fixture = TestBed.createComponent(ProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь свойство selectedPrices', () => {
    expect((component as any).selectedPrices).toBeDefined([]);
  });

  it('компонент должен иметь свойство selectedBrands c значением null', () => {
    expect((component as any).selectedBrands).toBeDefined();
  });

  it('компонент должен иметь свойство brands c значением null', () => {
    expect((component as any).brands).toBeDefined();
  });

  it('компонент должен иметь cобственное событие confirm ', () => {
    expect((component as any).confirm).toBeTruthy();
    expect((component as any).confirm).toBeInstanceOf(EventEmitter);
  });

  it('форма должна быть не пустой', () => {
    expect(component.form.valid).toBeTruthy();
  });

  it('поле name в форме должно быть валидным', () => {
    const brands = component.form.controls.brands;
    expect(brands.valid).toBeTruthy();
  });

  it('поле telephone в форме должно быть валидным', () => {
    const searchByName = component.form.controls.searchByName;
    expect(searchByName.valid).toBeTruthy();
  });

  it('поле prices в форме должно быть валидным', () => {
    const prices = component.form.controls.prices;
    expect(prices.valid).toBeTruthy();
  });
});
