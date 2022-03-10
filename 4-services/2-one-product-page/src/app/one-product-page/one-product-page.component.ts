import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/4-services/product-information';

@Component({
	selector: 'ngx-shop-one-product-page',
	templateUrl: './one-product-page.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	@Input() public product: IProduct | null = null;

	public goToBasket() {}
}
