import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'shared/mocks/1-components/product';

@Component({
	selector: 'ngx-shop-product-card',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input()
	public product: IProduct = {} as IProduct;

	@Output()
	public goToProduct: EventEmitter<string> = new EventEmitter<string>();

	public redirectTo(): void {
		this.goToProduct.emit();
	}
}
