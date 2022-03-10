import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductsResponse } from '../../../../../../shared/mocks/4-services/products';

@Injectable()
export class ProductsService {
	public constructor(private _http: HttpClient) {}

	public getAll(): Observable<IProductsResponse> {
		return this._http.get<IProductsResponse>(`api/products/suggestion`);
	}
}
