import { ICategory } from './../../../../../../shared/interfaces/categories.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input()
  public categories: ICategory[] = [];

  @Output()
  public categoryChange: EventEmitter<string> = new EventEmitter();

  public currentName: string | null = null;

  public hover(name: string): void {
    this.currentName = name;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }

  public redirectTo(subCategory: string): void {
    this.categoryChange.emit(subCategory);
  }
}
