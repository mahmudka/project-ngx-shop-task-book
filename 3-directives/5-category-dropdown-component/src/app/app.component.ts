import { ChangeDetectionStrategy, Component } from '@angular/core';
import { categories } from '../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title = 'Компонент выбора категории товара';

	public categories = categories;

	public terminalMessage = '';

	public selectSubCategory(subCategory: string) {
		this.terminalMessage = `Переход на категорию товара: ${subCategory}`;
	}
}
