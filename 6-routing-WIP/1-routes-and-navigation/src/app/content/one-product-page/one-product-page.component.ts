import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../../shared/mocks/6-routing/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'ngx-shop-one-product-page',
  templateUrl: './one-product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  public product$: Observable<IProduct> = null;
  constructor(
    private productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getData();
  }

  getData() {
    const { product } = this.activatedRoute.snapshot.params;
    this.product$ = this.productsService.getProductById(product);
  }
}
