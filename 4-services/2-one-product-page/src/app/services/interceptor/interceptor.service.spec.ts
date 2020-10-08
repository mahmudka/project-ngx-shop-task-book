import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { BASE_URL_TOKEN } from './config';
import { environment } from '../../../environments/environment';
import { ProductsService } from '../products/products.service';

export const products = [
  {
    _id: '5e7cef4eed3d55e9ccc62885',
    title: 'Product 111',
    img: 'assets/img/product-4.jpg',
    price: 2345,
    author: 'Igor',
    isFavorite: false,
  },
  {
    _id: '5e7cef4eed3d55e9ccc62886',
    title: 'Product 231',
    img: 'assets/img/product-5.jpg',
    price: 23,
    author: 'Vlad',
    isFavorite: true,
  },
  {
    _id: '5e7cef4eed3d55e9ccc62887',
    title: 'Product 234',
    img: 'assets/img/product-3.jpg',
    price: 333,
    author: 'Igor',
    isFavorite: true,
  },
];
describe('Interceptor', () => {
  let httpMocked: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductsService,
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
    httpMocked = TestBed.inject(HttpTestingController);
  });

  it('should has Content-Type header', inject(
    [HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get('/auth').subscribe();
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/auth`,
      });
      expect(httpReq.request.headers.has('Content-Type')).toBeTruthy();
      expect(httpReq.request.headers.get('Content-Type')).toEqual(
        'application/json'
      );
    }
  ));

  it('should transform right', inject(
    [HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get('/products').subscribe((response) => {
        expect(response).toEqual(products);
      });
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/products`,
      });
      httpReq.flush({
        data: products,
        error: null,
      });
    }
  ));
});
