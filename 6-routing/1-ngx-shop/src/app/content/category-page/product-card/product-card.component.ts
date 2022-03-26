import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../../../../../../shared/mocks/6-routing/products';
import { CartService } from '../../../services/cart.service';

@Component({
	selector: 'ngx-shop-content-product',
	templateUrl: './product-card.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
	@Input()
	public product!: IProduct;

	public constructor(private router: Router, private readonly cartService: CartService) {}

	public addToCart(): void {
		this.cartService.updateCart(this.product, 'increment');
	}

	public redirectTo(): void {
		this.router.navigate(['/category', this.product.subCategory, this.product._id]);
	}
}
