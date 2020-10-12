import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  // @ts-ignore
  public product?: IProduct = null;
  public isShow = false;

  @Output()
  // @ts-ignore
  public addToCart: EventEmitter<string> = new EventEmitter<string>();

  public addToBasket(): void {
    this.addToCart.emit('товар добавлен в кoрзину');
  }
  public show(): void {
    this.isShow = !this.isShow;
  }
}
