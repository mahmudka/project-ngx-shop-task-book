import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class HeaderComponent {
  public counter = 5;

  @Output()
  // @ts-ignore
  public goToBasket = new EventEmitter();

  public redirectTo() {
    this.goToBasket.emit();
  }
}
