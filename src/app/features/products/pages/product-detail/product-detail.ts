import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../../core/services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  private id = Number(this.route.snapshot.paramMap.get('id'));

  state$ = this.productsService.getProductState(this.id);
}