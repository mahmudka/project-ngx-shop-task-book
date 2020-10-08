import { Component, Input } from '@angular/core';
@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent {
  @Input() public categories = null;
  @Input() public products = null;

  goToBasket() {}
  redirectTo(val) {}
  goToProduct() {}
}
