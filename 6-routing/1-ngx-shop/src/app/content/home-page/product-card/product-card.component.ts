import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../../../../../shared/mocks/6-routing/products';

@Component({
	selector: 'ngx-shop-product-card',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input()
	public product!: IProduct;

	public constructor(private router: Router) {}

	public redirectTo(): void {
		this.router.navigate(['/category', this.product.subCategory, this.product._id]);
	}
}
