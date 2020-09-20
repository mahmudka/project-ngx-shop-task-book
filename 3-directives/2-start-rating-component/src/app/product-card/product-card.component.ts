import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/interfaces';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
// @ts-ignore
export class ProductCardComponent {
  @Input()
  // @ts-ignore
  public product!: IProduct = {} as IProduct;
  @Output()
  // @ts-ignore
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
