# Configuración de Firebase REST API

## Descripción
Se ha agregado un servicio `FirebaseService` que permite conectar tu aplicación Angular con Firebase Realtime Database usando REST API.

## Cómo configurar

### 1. Obtener tu URL de Firebase
1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Selecciona tu proyecto
3. Ve a "Realtime Database"
4. Copia la URL base (ej: `https://tu-proyecto.firebaseio.com`)

### 2. Actualizar el servicio
Abre `src/app/services/firebase.service.ts` y reemplaza:
```typescript
private firebaseUrl = 'https://your-project.firebaseio.com';
```
Con tu URL real:
```typescript
private firebaseUrl = 'https://tu-proyecto.firebaseio.com';
```

### 3. Usar el servicio en tus componentes

```typescript
import { FirebaseService } from '../../services/firebase.service';

export class MyComponent {
  constructor(private firebaseService: FirebaseService) {}

  getProducts() {
    this.firebaseService.getProducts().subscribe(
      (products) => {
        console.log(products);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
```

## Métodos disponibles

- `getProducts()` - Obtener todos los productos
- `getProduct(id)` - Obtener un producto específico
- `addProduct(product)` - Agregar un nuevo producto
- `updateProduct(id, product)` - Actualizar un producto
- `deleteProduct(id)` - Eliminar un producto
- `saveCart(cartId, cartData)` - Guardar carrito
- `getCart(cartId)` - Obtener carrito

## Estructura de datos esperada en Firebase

```json
{
  "products": {
    "1": {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "description": "Description",
      "image": "image-url"
    }
  },
  "carts": {
    "cartId": {
      "items": []
    }
  }
}
```

## Responsive Design

El proyecto ahora es completamente responsive en:
- **Mobile**: 600px y inferior
- **Tablet**: 601px a 800px
- **Medium**: 801px a 1024px
- **Desktop**: 1025px y superior

## Modo Oscuro

El modo oscuro está habilitado en todos los componentes:
- Header
- Footer
- Páginas (Home, Shop, Cart, Contact, Product Details)
- Botón de alternancia en el header

Haz clic en "Cambiar Tema" para activar/desactivar el modo oscuro.

## Nota
Asegúrate de que tu Firebase Database tenga reglas de seguridad correctas para permitir acceso REST si es necesario.
