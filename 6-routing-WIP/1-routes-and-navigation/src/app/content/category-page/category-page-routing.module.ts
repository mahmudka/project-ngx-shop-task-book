import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryPageComponent } from './category-page.component';

const routes: Routes = [
  {
    path: ':subCategory',
    component: CategoryPageComponent,
  },
  {
    path: ':subCategory/:product',

    loadChildren: () =>
      import('../one-product-page/one-product-page.module').then(
        (mod) => mod.ProductPageModule
      ),
    data: {
      state: 'product',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryPageRoutingModule {}
