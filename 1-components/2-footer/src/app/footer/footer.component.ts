import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'ngx-shop-footer',
	templateUrl: './footer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	public readonly author = 'Angular Course';

	public currentYear: number = new Date().getFullYear();
}
