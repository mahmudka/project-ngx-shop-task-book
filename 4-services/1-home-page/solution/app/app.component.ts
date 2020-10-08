import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../shared/mocks/4-services/categories';
import { IProduct } from '../../../../shared/mocks/4-services/products';
import { CategoriesService } from './services/categories/category.service';
import { ProductsService } from './services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent implements OnInit {
  public title = 'Компонент домашней страницы';
  public products$: Observable<IProduct[]> = null;
  public categories$: Observable<ICategory[]> = null;
  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
  }
}
