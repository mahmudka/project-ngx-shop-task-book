import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public title = 'Компонент навигации';

  goToBasket() {}
}
