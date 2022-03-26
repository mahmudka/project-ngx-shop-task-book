import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/2-pipes/product';

@Component({
	selector: 'ngx-shop-product-card',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ProductCardComponent {
	@Input() 
	public product!: IProduct;

	@Output() public goToProduct: EventEmitter<void> = new EventEmitter();

	public redirectTo(): void {
		this.goToProduct.emit();
	}
}
