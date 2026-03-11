import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkMode = signal<boolean>(true);
  readonly isDarkMode = this._isDarkMode.asReadonly();

  constructor() {
    const saved = localStorage.getItem('lifeplanner-theme');
    const dark = saved !== 'light';
    this._isDarkMode.set(dark);
    this.applyTheme(dark);
  }

  toggleTheme(): void {
    const newDark = !this._isDarkMode();
    this._isDarkMode.set(newDark);
    localStorage.setItem('lifeplanner-theme', newDark ? 'dark' : 'light');
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
