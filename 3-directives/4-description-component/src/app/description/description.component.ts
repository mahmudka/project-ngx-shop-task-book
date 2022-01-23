import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
	selector: 'ngx-shop-product-description',
	templateUrl: './description.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
	@Input()
	public product?: IProduct = {} as IProduct;

	@Output()
	public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

	public isShowDescription = true;

	public addFeedback() {
		this.addFeedbackEvent.emit('отзыв добавлен');
	}

	public toggleTab(state: boolean): void {
		this.isShowDescription = state;
	}
}
