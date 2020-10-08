import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from '../../../../../shared/mocks/categories.mock';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input()
  // @ts-ignore
  public categories: ICategory[] = [];

  @Output()
  // @ts-ignore
  public subCategorySelectEvent: EventEmitter<string> = new EventEmitter();

  public currentIndex: number | null = null;
  public currentCategory = '';

  public showSubCategories(index: number): void {
    this.currentIndex = index;
  }
  public subCategorySelect(subCategoryName: string): void {
    this.subCategorySelectEvent.emit(subCategoryName);
  }
}
