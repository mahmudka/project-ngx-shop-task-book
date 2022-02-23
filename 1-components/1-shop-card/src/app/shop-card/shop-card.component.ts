import { ChangeDetectionStrategy, Component, Output, Input, EventEmitter } from '@angular/core';
import { ICartProduct } from 'shared/mocks/1-components/cart-product';

@Component({
	selector: 'ngx-shop-card',
	templateUrl: './shop-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopCardComponent {
	@Input()
	public product: ICartProduct = {} as ICartProduct;

	@Output()
	public increment: EventEmitter<number> = new EventEmitter<number>();

	@Output()
	public decrement: EventEmitter<number> = new EventEmitter<number>();

	public incrementProductInCart(): void {
		this.increment.emit();
	}

	public decrementProductInCart(): void {
		this.decrement.emit();
	}

	public getSum() {
		return this.product?.price * this.product?.count;
	}
}
