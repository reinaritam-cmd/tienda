import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  cartTotal = this.cartService.cartTotal;

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
  }
}
