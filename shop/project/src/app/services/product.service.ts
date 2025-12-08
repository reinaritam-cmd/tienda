import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Black Leather-Strap Watch',
      price: 250,
      description: 'A stylish and elegant watch with a black leather strap.',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d'
    },
    {
      id: 2,
      name: 'Slim-Fit Denim Jeans',
      price: 89.99,
      description: 'Comfortable and stylish slim-fit jeans in a dark wash.',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246'
    },
    {
      id: 3,
      name: 'V-Neck Cotton T-Shirt',
      price: 24.99,
      description: 'A soft and breathable V-neck t-shirt, perfect for layering.',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27'
    }
  ]);
}
