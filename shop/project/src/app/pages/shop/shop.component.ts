import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  products = this.productService.products;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
