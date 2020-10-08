import { Component } from '@angular/core';
import { brands } from '../../../../shared/mocks/5-forms/brands.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public title = 'Компонент фильтрации товаров';
  public brands = brands;
  public terminalMessage = null;

  public confirm(event: FormData) {
    this.terminalMessage = event;
  }
}
