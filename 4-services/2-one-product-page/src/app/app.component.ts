import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../shared/mocks/4-services/product-information';
import { ProductsService } from './services/products/products.service';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	public title = 'Компонент страницы продукта';

	/*public products: Observable<IProduct> = this.productsService.getProductById(
		'korpus-cougar-gemini-m-385tmb00001-seryj',
	);*/
	public products: Observable<IProduct> | null = null;

	public constructor(private productsService: ProductsService) {}

	public ngOnInit() {
		this.products = this.productsService.getProductById('korpus-cougar-gemini-m-385tmb00001-seryj');
	}
}
