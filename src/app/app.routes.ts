import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/products/pages/products-list/products-list')
        .then(m => m.ProductsListComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./features/products/pages/product-detail/product-detail')
        .then(m => m.ProductDetailComponent),
  },
];