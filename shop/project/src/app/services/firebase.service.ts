import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Reemplaza con tu URL de Firebase Realtime Database
  private firebaseUrl = 'https://your-project.firebaseio.com';

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.firebaseUrl}/products.json`);
  }

  // Obtener un producto por ID
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.firebaseUrl}/products/${id}.json`);
  }

  // Agregar un nuevo producto
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.firebaseUrl}/products.json`, product);
  }

  // Actualizar un producto
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.firebaseUrl}/products/${id}.json`, product);
  }

  // Eliminar un producto
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.firebaseUrl}/products/${id}.json`);
  }

  // Guardar carrito
  saveCart(cartId: string, cartData: any): Observable<any> {
    return this.http.put(`${this.firebaseUrl}/carts/${cartId}.json`, cartData);
  }

  // Obtener carrito
  getCart(cartId: string): Observable<any> {
    return this.http.get(`${this.firebaseUrl}/carts/${cartId}.json`);
  }
}
