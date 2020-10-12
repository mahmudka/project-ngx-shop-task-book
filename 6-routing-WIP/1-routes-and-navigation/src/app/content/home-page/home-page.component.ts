import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../../../shared/mocks/6-routing/categories';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../../../../../shared/mocks/6-routing/products';
import { OnInit } from '@angular/core';
@Component({
  selector: 'ngx-shop-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
// @ts-ignore
export class HomePageComponent implements OnInit {
  public products$: Observable<IProduct[]> = null;
  public categories$: Observable<ICategory[]> = null;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.products$ = this.productsService.getProducts();
    this.categories$ = this.categoriesService.getCategories();
  }
}
