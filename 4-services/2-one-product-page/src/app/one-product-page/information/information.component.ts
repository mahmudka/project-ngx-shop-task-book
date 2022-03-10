import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../../shared/mocks/4-services/product-information';

@Component({
	selector: 'ngx-shop-information',
	templateUrl: './information.component.html',
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationComponent {
	@Input()
	public product?: IProduct | null = null;

	public isShow = false;

	@Output()
	// @ts-ignore
	public addToCart: EventEmitter<string> = new EventEmitter<string>();

	public addToBasket(): void {
		this.addToCart.emit('товар добавлен в кoрзину');
	}

	public show(): void {
		this.isShow = !this.isShow;
	}
}
