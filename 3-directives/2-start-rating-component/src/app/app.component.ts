import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/3-directives/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Компонент рейтинга товара';
  public product = oneProduct;
}
