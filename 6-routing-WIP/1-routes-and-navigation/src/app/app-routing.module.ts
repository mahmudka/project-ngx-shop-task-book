import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./content/home-page/home-page.module').then(
        (mod) => mod.HomePageModule
      ),
    data: {
      state: 'products',
    },
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./content/one-product-page/one-product-page.module').then(
        (mod) => mod.ProductPageModule
      ),
    data: {
      state: 'product',
    },
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./content/category-page/category-page.module').then(
        (mod) => mod.CategoryPageModule
      ),
    data: {
      state: 'category',
    },
  },

  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
