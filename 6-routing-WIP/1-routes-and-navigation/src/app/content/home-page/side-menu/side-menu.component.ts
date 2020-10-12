import { ICategory } from '../../../../../../../shared/interfaces/categories.interface';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input()
  public categories: ICategory[] = [];

  constructor(private router: Router) {}
  public currentName: string | null = null;

  public hover(name: string): void {
    this.currentName = name;
  }

  public mouseLeave(): void {
    this.currentName = null;
  }

  public redirectTo(subCategoryId: string): void {
    this.router.navigate(['/category', subCategoryId]);
  }
}
