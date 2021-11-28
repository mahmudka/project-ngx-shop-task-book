import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../shared/mocks/4-services/categories';
import { IProductsResponse } from '../../../../shared/mocks/4-services/products';
import { CategoriesService } from './services/categories/category.service';
import { ProductsService } from './services/products/products.service';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class AppComponent implements OnInit {
	public title = 'Компонент домашней страницы';

	public products$: Observable<IProductsResponse> = this.productsService.getProducts();

	public categories$: Observable<ICategory[]> = this.categoriesService.getCategories();

	public constructor(
		private productsService: ProductsService,
		private categoriesService: CategoriesService,
	) {}
}
