import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  public id = input.required<string>();
  public product = computed(() => this.productService.products().find(p => p.id === +this.id()));

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
