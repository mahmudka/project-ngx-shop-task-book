import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
	@Input()
	public categories: ICategory[] = [] as ICategory[];

	@Output()
	public categoryChange: EventEmitter<string> = new EventEmitter<string>();

	public currentName: string | null = null;

	public redirectTo(category: ICategory): void {
		this.categoryChange.emit(category.name);
	}

	public hover(categoryName: string): void {
		this.currentName = categoryName;
	}

	public mouseLeave(): void {
		this.currentName = null;
	}
}
