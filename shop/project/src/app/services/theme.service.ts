import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme = signal(false);

  toggleTheme(): void {
    this.isDarkTheme.set(!this.isDarkTheme());
  }

  setTheme(isDark: boolean): void {
    this.isDarkTheme.set(isDark);
  }

  getTheme(): boolean {
    return this.isDarkTheme();
  }
}
