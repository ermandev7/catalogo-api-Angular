import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ AÑADIR
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ AÑADIR AQUÍ
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsListComponent {
  private productsService = inject(ProductsService);

  state$ = this.productsService.getProductsState();

  skeletonItems = Array.from({ length: 10 });
}