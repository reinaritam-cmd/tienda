
import { ChangeDetectionStrategy, Component, Inject, Renderer2, signal, inject, computed, ElementRef } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.dark-theme]': 'themeService.isDarkTheme()' }
})
export class HeaderComponent {
  private cartService = inject(CartService);
  themeService = inject(ThemeService);
  cartCount = computed(() => this.cartService.cart().length);
  menuOpen = signal(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
    if (this.themeService.isDarkTheme()) {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.renderer.addClass(this.elementRef.nativeElement, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.elementRef.nativeElement, 'dark-theme');
    }
  }

  toggleMenu(): void {
    // toggle state and add/remove host class so CSS can show/hide nav
    const newState = !this.menuOpen();
    this.menuOpen.set(newState);
    if (newState) {
      this.renderer.addClass(this.elementRef.nativeElement, 'menu-open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'menu-open');
    }
    // debug: help trace clicks in the browser console
    // remove or comment out after verification
    // eslint-disable-next-line no-console
    console.log('[Header] toggleMenu ->', newState);
    // Fallback: directly toggle the nav.open class in case template binding
    // doesn't reflect immediately in some environments.
    try {
      const navEl = this.elementRef.nativeElement.querySelector('.navigation');
      if (navEl) {
        if (newState) {
          this.renderer.addClass(navEl, 'open');
        } else {
          this.renderer.removeClass(navEl, 'open');
        }
      }
    } catch (e) {
      // don't break if DOM query fails; console for debugging
      // eslint-disable-next-line no-console
      console.warn('[Header] toggleMenu fallback failed', e);
    }
  }
}
