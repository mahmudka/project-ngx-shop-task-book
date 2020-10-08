import { Component } from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
})
// @ts-ignore
export class FooterComponent {
  public author = 'Angular Course';
  public currentYear: number = new Date().getFullYear();
}
