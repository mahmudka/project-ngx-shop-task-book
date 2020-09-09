import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
// @ts-ignore
import { IProduct } from '../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class CategoryProductComponent {
  @Input()
  // @ts-ignore
  public product!: IProduct = {} as IProduct;

  @Output()
  // @ts-ignore
  public addToCart: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  // @ts-ignore
  public goToProduct: EventEmitter<string> = new EventEmitter<string>();

  public addToBasket(): void {
    this.addToCart.emit('Вы добавили товар в корзину');
  }

  public redirectTo(): void {
    this.goToProduct.emit('Переход на компонент товара');
  }
}
