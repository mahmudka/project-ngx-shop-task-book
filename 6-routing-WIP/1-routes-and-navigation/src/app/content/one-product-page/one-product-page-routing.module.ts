import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './one-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
    data: {
      state: 'product',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductPageRoutingModule {}
