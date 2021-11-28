import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-shop-product-description',
	templateUrl: './description.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {}
