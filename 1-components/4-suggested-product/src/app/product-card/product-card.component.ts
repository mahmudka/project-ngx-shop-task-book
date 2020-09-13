import { Component, Input, Output, EventEmitter } from '@angular/core';
// @ts-ignore
import { IProduct } from '../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
// @ts-ignore
export class ProductCardComponent {
  @Input()
  // @ts-ignore
  public product!: any = {} as any;
  @Output()
  // @ts-ignore
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
