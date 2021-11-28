import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
// @ts-ignore
import { ICategory } from '../../../../../shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class SideMenuComponent {
	@Input()
	// @ts-ignore
	public categories: ICategory[] = [];

	@Output()
	// @ts-ignore
	public categoryChange: EventEmitter<string> = new EventEmitter();

	public currentName: string | null = null;

	public hover(name: string | undefined): void {
		if (!name) {
			return;
		}
		this.currentName = name;
	}

	public mouseLeave(): void {
		this.currentName = null;
	}

	public redirectTo(subCategory: string | undefined): void {
		this.categoryChange.emit(subCategory);
	}
}
