import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-information',
	templateUrl: './information.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
	@Input()
	// @ts-ignore
	public product?: IProduct = null;

	@Output()
	public addToCart: EventEmitter<string> = new EventEmitter<string>();

	public isShow = false;

	public addToBasket(): void {
		this.addToCart.emit('товар добавлен в корзину');
	}

	public show(): void {
		this.isShow = !this.isShow;
	}
}
