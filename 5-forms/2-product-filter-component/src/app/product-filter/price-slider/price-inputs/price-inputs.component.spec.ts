import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { PriceInputsComponent } from './price-inputs.component';

describe('[Moдуль 5 - Компонент лимитов цены товара]', () => {
  let fixture: ComponentFixture<PriceInputsComponent>;
  let component: PriceInputsComponent;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceInputsComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: PriceInputsComponent,
          multi: true,
        },
      ],
    });
    fixture = TestBed.createComponent(PriceInputsComponent);
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

  it('форма должна быть не пустой', () => {
    expect(component.pricesGroup.valid).toBeTruthy();
  });

  it('поле high в форме должно быть валидным', () => {
    const high = component.pricesGroup.controls.high;
    expect(high.valid).toBeTruthy();
  });

  it('поле low в форме должно быть валидным', () => {
    const low = component.pricesGroup.controls.low;
    expect(low.valid).toBeTruthy();
  });
});
