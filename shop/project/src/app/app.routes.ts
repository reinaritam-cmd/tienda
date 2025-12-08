import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent }
];
