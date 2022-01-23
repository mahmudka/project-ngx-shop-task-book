import { ChangeDetectionStrategy, Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/3-directives/product';
import { IProduct } from '../../../../shared/mocks/3-directives/interfaces';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = 'Компонент рейтинга товара';

	public product: IProduct = oneProduct as IProduct;
}
