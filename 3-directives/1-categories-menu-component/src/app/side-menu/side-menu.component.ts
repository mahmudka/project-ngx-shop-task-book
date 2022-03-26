import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ICategory } from 'shared/mocks/3-directives/categories';

@Component({
	selector: 'ngx-shop-side-menu',
	templateUrl: './side-menu.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
	@Input()
	public categories: ICategory[] = [];

	@Output()
	public categoryChange: EventEmitter<string> = new EventEmitter<string>();

	@ViewChild("submenu", {static: true})
    subMenu!: ElementRef;

	public currentName: string | null = null;

	public hover(name: string | undefined) {
		if (!name) {
			return;
		}
		this.currentName = name;

		this.categories.forEach( category => {
			if (category?.name === this.currentName) {
				console.log(category.name);
				// как тут правильно обратиться к dom элементу по ссылке, чтобы класс поменять?
				console.log(this.subMenu);
			}
		});
	}

	public mouseLeave() {
		this.currentName = null;
	}

	public redirectTo(subCategory: string | undefined): void {
		this.categoryChange.emit(subCategory);
	}
}
