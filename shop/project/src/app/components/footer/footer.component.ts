import { Component, ElementRef, Inject, Renderer2, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  host: { '[class.dark-theme]': 'themeService.isDarkTheme()' }
})
export class FooterComponent {
  themeService = inject(ThemeService);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}
}
