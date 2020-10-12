import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Ng5SliderModule } from 'ng5-slider';
import { PriceInputsComponent } from './price-inputs/price-inputs.component';

import { PriceSliderComponent } from './price-slider.component';
describe('[Moдуль 6 - Компонент слайдера цены]', () => {
  let fixture: ComponentFixture<PriceSliderComponent>;
  let component: PriceSliderComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceSliderComponent, PriceInputsComponent],
      imports: [Ng5SliderModule, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: PriceSliderComponent,
          multi: true,
        },
      ],
    });
    fixture = TestBed.createComponent(PriceSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('компонент должен иметь метод writeValue ', () => {
    expect((component as any).writeValue).toBeTruthy();
  });

  it('компонент должен иметь метод registerOnChange ', () => {
    expect((component as any).registerOnChange).toBeTruthy();
  });

  it('компонент должен иметь метод registerOnTouched ', () => {
    expect((component as any).registerOnTouched).toBeTruthy();
  });

  it('компонент должен иметь метод applyFilter ', () => {
    expect((component as any).applyFilter).toBeTruthy();
  });

  it('компонент должен иметь свойство options ', () => {
    expect((component as any).options).toBeDefined({
      animate: false,
      floor: 0,
      hideLimitLabels: true,
      hidePointerLabels: true,
      ceil: 2000,
    });
  });

  it('компонент должен иметь свойство pricesControl c значением [20, 80]', () => {
    expect((component as any).pricesControl).toBeDefined([20, 80]);
  });

  it('при нажатии на кнопку с селектором .apply-filter должен вызываться метод applyFilter', () => {
    spyOn(component as any, 'applyFilter').and.callThrough();
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.apply-filter'));
    button.triggerEventHandler('click', null);
    expect((component as any)?.applyFilter).toHaveBeenCalledTimes(1);
  });
});
