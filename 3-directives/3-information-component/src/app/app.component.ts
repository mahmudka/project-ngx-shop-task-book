import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IProduct, oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = 'Компонент информации о товаре';

	public product: IProduct = oneProduct || ({} as IProduct);

	public terminalMessage = '';

	public addToCart(value: string): void {
		this.terminalMessage = value;
	}
}
