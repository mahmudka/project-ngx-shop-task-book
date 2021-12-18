import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/1-components/product';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public terminalMessage: string = '';

	public title = '1. Интерполяция и связывание (Карточка товара на главной странице)';

	public product: IProduct = oneProduct;

	public goToProduct() {
		this.terminalMessage = 'Переход на компонент продукта';
	}
}
