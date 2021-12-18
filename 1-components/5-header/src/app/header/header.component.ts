import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'ngx-shop-header',
	templateUrl: './header.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
	@Output()
	public goToBasket = new EventEmitter();

	public redirectTo(): void {
		this.goToBasket.emit();
	}

	public counter = 5;
}
