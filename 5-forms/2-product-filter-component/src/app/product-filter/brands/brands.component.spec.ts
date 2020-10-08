import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { brands } from '../../../../../../shared/mocks/5-forms/brands.mock';
import { BrandsComponent } from './brands.component';
describe('[Moдуль 5 - Компонент бренда товаров]', () => {
  let fixture: ComponentFixture<BrandsComponent>;
  let component: BrandsComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: BrandsComponent,
          multi: true,
        },
      ],
    });
    fixture = TestBed.createComponent(BrandsComponent);
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

  it('компонент должен иметь метод showBrand ', () => {
    expect((component as any).showBrand).toBeTruthy();
  });

  it('компонент должен иметь метод show ', () => {
    expect((component as any).show).toBeTruthy();
  });

  it('компонент должен иметь метод check ', () => {
    expect((component as any).check).toBeTruthy();
  });

  it('компонент должен иметь свойство brands c значением []', () => {
    expect((component as any).brands).toBeDefined([]);
  });

  it('компонент должен иметь свойство selectedBrands c значением  []', () => {
    expect((component as any).selectedBrands).toBeDefined([]);
  });

  it('компонент должен иметь свойство isShow c значением false', () => {
    expect((component as any).isShow).toBeDefined(false);
  });
  it('компонент должен иметь свойство brandsToShow c значением []', () => {
    expect((component as any).brandsToShow).toBeDefined([]);
  });
  // TODO rewrite

  xit('тег с селектором .brand-name  должен правильно интерполировать свойство brandName', () => {
    (component as any).brands = brands;
    expect(brands).toBeTruthy();
    expect((component as any).brands.length).toBeGreaterThan(0);

    fixture.detectChanges();
    const brandNameElList: DebugElement[] = fixture.debugElement.queryAll(
      By.css('.brand-name')
    );
    expect(brands).toBeTruthy();
    expect(brandNameElList).toBeTruthy();
    expect(brandNameElList.length).toEqual((component as any).brands.length);

    (component as any).brands.forEach((brand: string, index: number) => {
      expect(brandNameElList[index].nativeElement.textContent.trim()).toEqual(
        brand
      );
    });
  });

  xit('при нажатии на кнопку с селектором .more должен вызываться метод  show и значение свойства isShow должно быть true', () => {
    (component as any).brands = brands;
    expect(brands).toBeTruthy();
    expect((component as any).brands.length).toBeGreaterThan(0);

    expect((component as any).isShow).toBeDefined(false);
    spyOn(component as any, 'show').and.callThrough();
    fixture.detectChanges();

    const showButton = fixture.debugElement.query(By.css('.more'));
    showButton.triggerEventHandler('click', null);
    expect((component as any)?.show).toHaveBeenCalledTimes(1);
    expect((component as any).isShow).toEqual(true);
  });
});
