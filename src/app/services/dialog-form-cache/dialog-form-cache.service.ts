import { Injectable } from '@angular/core';

/**
 * Shared cache keys used by dialog form components and their corresponding
 * NgRx effects so that both sides reference the same localStorage key.
 */
export const DIALOG_CACHE_KEYS = {
  ADD_TASK: 'lifeplanner-dialog-add-task',
  ACTIVITY_FORM: 'lifeplanner-dialog-activity-form',
  CREATE_TEMPLATE: 'lifeplanner-dialog-create-template',
} as const;

/**
 * Lightweight service that persists dialog form state to localStorage so that
 * entries are not lost when a dialog is accidentally closed.
 *
 * Cache key naming convention: `lifeplanner-dialog-<form-name>`
 */
@Injectable({
  providedIn: 'root',
})
export class DialogFormCacheService {
  /** Persist arbitrary form data under the given key. */
  save(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
      // localStorage unavailable — cache won't persist
    }
  }

  /** Retrieve previously cached form data, or null if none exists. */
  load<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  /** Remove the cached entry (call on successful form submission). */
  clear(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // localStorage unavailable — cache cannot be cleared
    }
  }
}
