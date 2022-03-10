import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products/products.service';
import { CategoriesService } from './services/categories/category.service';
import { Observable } from 'rxjs';
import { IProductsResponse } from '../../../../shared/mocks/4-services/products';
import { ICategory } from '../../../../shared/mocks/4-services/categories';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class AppComponent implements OnInit {
	public title = 'Компонент домашней страницы';

	public products$: Observable<IProductsResponse> = this._productsService.getAll();

	public categories$: Observable<ICategory[]> = this._categoriesService.getAll();

	public constructor(
		private _categoriesService: CategoriesService,
		private _productsService: ProductsService,
	) {}
}
