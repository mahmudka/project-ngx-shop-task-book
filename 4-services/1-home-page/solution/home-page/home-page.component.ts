import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/4-services/categories';
import { IProduct } from '../../../../../shared/mocks/4-services/products';

@Component({
	selector: 'ngx-shop-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class HomePageComponent {
	@Input() public categories: ICategory[] = [];

	@Input() public products: IProduct[] = [];

	public goToBasket() {}

	public redirectTo(_val: string) {}

	public goToProduct() {}
}
