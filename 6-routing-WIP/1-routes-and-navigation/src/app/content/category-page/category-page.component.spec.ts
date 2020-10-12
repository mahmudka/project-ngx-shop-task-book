import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPageComponent } from './category-page.component';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { BrandsService } from '../../services/brands.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { BrandsComponent } from './brands/brands.component';
import { PriceInputsComponent } from './price-slider/price-inputs/price-inputs.component';
import { PriceSliderComponent } from './price-slider/price-slider.component';
import { InterceptorService } from './../../services/interceptor.service';
import { BASE_URL_TOKEN } from './../../services/config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('[Moдуль 6 - Компонент страницы категорий]', () => {
  let fixture: ComponentFixture<CategoryPageComponent>;
  let component: CategoryPageComponent;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent,
        CategoryDropdownComponent,
        PriceSliderComponent,
        BrandsComponent,
        PriceInputsComponent,
      ],

      imports: [
        Ng5SliderModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        CategoriesService,
        ProductsService,
        BrandsService,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    });
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('компонент должен иметь свойство selectedSubCategory c значением null', () => {
  //   expect((component as any).selectedSubCategory).toBeDefined(null);
  // });
  // it('компонент должен иметь метод getQueryParams ', () => {
  //   expect((component as any).getQueryParams).toBeTruthy();
  // });
  // it('компонент должен иметь метод filterByParams ', () => {
  //   expect((component as any).filterByParams).toBeTruthy();
  // });
  // it('компонент должен иметь метод subCategorySelect ', () => {
  //   expect((component as any).subCategorySelect).toBeTruthy();
  // });

  /*it('поле name в форме должно быть валидным', () => {
    const brands = component.form.controls.brands;
    expect(brands).toBeTruthy();
    brands.setValue(['101010', '121212']);
    expect(brands).toBeTruthy();
  });*/

  // it('поле telephone в форме должно быть валидным', () => {
  //   const text = component.form.controls.text;
  //   expect(text).toBeTruthy();
  // });

  // it('поле prices в форме должно быть валидным', () => {
  //   const prices = component.form.controls.prices;
  //   expect(prices).toBeTruthy();
  // });
});
