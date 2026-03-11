import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkMode = signal<boolean>(false);
  readonly isDarkMode = this._isDarkMode.asReadonly();

  constructor() {
    let dark = false;
    try {
      const saved = localStorage.getItem('lifeplanner-theme');
      dark = saved === 'dark';
    } catch {
      // localStorage blocked or unavailable — fall back to light (default)
    }
    this._isDarkMode.set(dark);
    this.applyTheme(dark);
  }

  toggleTheme(): void {
    const newDark = !this._isDarkMode();
    this._isDarkMode.set(newDark);
    try {
      localStorage.setItem('lifeplanner-theme', newDark ? 'dark' : 'light');
    } catch {
      // localStorage unavailable — preference won't persist
    }
    this.applyTheme(newDark);
  }

  private applyTheme(dark: boolean): void {
    if (dark) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }
}
