import { IProductApi } from './../../../../../../shared/mocks/6-routing/product-information';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ICategory } from '../../../../../../shared/mocks/6-routing/categories';
import { CategoriesService } from '../../services/category.service';
import { ProductsService } from '../../services/products.service';
import { BrandsService } from '../../services/brands.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-shop-category-page',
  templateUrl: './category-page.component.html',
})
export class CategoryPageComponent implements OnInit {
  public categories$: Observable<ICategory[]> = null;
  public products$: Observable<IProductApi> = null;
  // tslint:disable-next-line: ban-types
  public brands$: Observable<Object> = null;
  public selectedSubCategory = null;
  public form: FormGroup = this.fb.group({
    brands: [[]],
    text: [''],
    prices: [[0, 2000]],
  });

  constructor(
    private readonly fb: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private brandsService: BrandsService,
    private router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategories();
    this.selectedSubCategory = this.activatedRoute.snapshot.params.subCategory;
    this.brands$ = this.brandsService.getBrands({
      prices: [0, 2000],
      id: this.selectedSubCategory,
    });
    this.getQueryParams();

    this.form.valueChanges.subscribe((data) => {
      this.filterByParams(data);
    });
  }

  getQueryParams() {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe((query) => {
      this.filterByParams({
        prices: query.prices ? query.prices : [0, 2000],
        text: query.text ? query.text : '',
        brands: query.brands ? query.brands : [],
      });
      this.form.patchValue(
        {
          prices: query.prices ? query.prices : [0, 2000],
          text: query.text ? query.text : '',
          brands: query.brands ? query.brands : [],
        },
        { emitEvent: false }
      );
    });
  }

  subCategorySelect(subCategory: string): void {
    this.selectedSubCategory = subCategory;
    this.form.patchValue({
      prices: [0, 2000],
      text: '',
      selectedBrands: [],
    });
    this.router.navigate(['category/', this.selectedSubCategory]);
    this.brands$ = this.brandsService.getBrands({
      prices: [0, 2000],
      id: this.selectedSubCategory,
    });
    this.products$ = this.productsService.getProductsBySubCategory({
      currentCategory: this.selectedSubCategory,
    });
  }

  filterByParams(data: {
    prices: number[];
    text: string;
    brands: string[];
  }): void {
    this.router.navigate(['category/', this.selectedSubCategory], {
      queryParams: {
        brands: data?.brands || undefined,
        text: data?.text || undefined,
        prices: data?.prices || undefined,
      },
    });
    this.products$ = this.productsService.getProductsBySubCategory({
      currentCategory: this.selectedSubCategory,
      priceRange: data.prices,
      text: data.text,
      selectedBrands: data.brands,
    });
  }
}
