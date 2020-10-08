import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент описания товара и отзывов';
  public product = oneProduct;
  public terminalMessage = null;
  public addFeedback(value: string): void {
    this.terminalMessage = value;
  }
}
