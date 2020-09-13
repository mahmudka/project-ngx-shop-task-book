import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class CategoryProductComponent {
  @Input()
  // @ts-ignore
  public product!: any = {} as any;

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
