import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/4-services/categories';

@Injectable()
export class CategoriesService {
	public constructor(private _http: HttpClient) {}

	public getAll(): Observable<ICategory[]> {
		return this._http.get<ICategory[]>(`api/categories`);
	}
}
