import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsResponse } from '../../../../../../shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
	public constructor(private http: HttpClient) {}

	public getProducts(): Observable<IProductsResponse> {
		return this.http.get<IProductsResponse>(`api/products/suggestion`);
	}
}
