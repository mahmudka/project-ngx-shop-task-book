import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../shared/mocks/6-routing/products';
import { IProductApi } from '../../../../../shared/mocks/6-routing/product-information';
import { Params } from '@angular/router';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`api/products/suggestion`);
  }
  public getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`api/products/${id}`);
  }

  public getProductsBySubCategory({
    currentCategory,
    priceRange,
    text,
    selectedBrands,
  }: Params): Observable<IProductApi> {
    let query = `?subCat=${currentCategory}`;
    if (priceRange && priceRange.length > 0) {
      query += `&prices=${priceRange}`;
    }
    if (text) {
      query += `&text=${text}`;
    }
    if (selectedBrands) {
      query += `&brands=${selectedBrands}`;
    }

    return this.http.get<IProductApi>(`api/products/${query}`);
  }
}
