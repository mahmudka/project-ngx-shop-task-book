import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { HomePageComponent } from './home-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { InterceptorService } from './../../services/interceptor.service';
import { BASE_URL_TOKEN } from './../../services/config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('[Moдуль 6 - Компонент домашней страницы]', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let component: HomePageComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        ProductCardComponent,
        SideMenuComponent,
      ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        ProductsService,
        CategoriesService,
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
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод getData ', () => {
    expect((component as any).getData).toBeTruthy();
  });
});
