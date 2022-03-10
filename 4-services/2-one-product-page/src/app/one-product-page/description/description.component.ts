import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../../shared/mocks/4-services/product-information';

@Component({
	selector: 'ngx-shop-description',
	templateUrl: './description.component.html',
	// changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
	@Input() public product: IProduct | null = null;

	// @ts-ignore
	public isShowDescription = true;

	@Output()
	// @ts-ignore
	public addFeedbackEvent: EventEmitter<string> = new EventEmitter<string>();

	public close!: () => void;

	public save!: (value: object) => void;

	public toggleTab(): void {
		this.isShowDescription = !this.isShowDescription;
	}

	public addFeedback(value: string): void {
		this.addFeedbackEvent.emit(value);
	}
}
