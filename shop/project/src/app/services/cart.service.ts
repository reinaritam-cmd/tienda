import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.update(currentCart => [...currentCart, product]);
  }

  removeFromCart(product: Product) {
    this.cart.update(currentCart => currentCart.filter(p => p.id !== product.id));
  }

  cartTotal = computed(() => {
    return this.cart().reduce((total, product) => total + product.price, 0);
  });
}
