import { inject, Injectable, signal } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';

const LOCAL_STORAGE_KEY = 'lifeplanner-app-title';
const DEFAULT_TITLE = 'LifePlanner';

@Injectable({
  providedIn: 'root',
})
export class AppTitleService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  private _appTitle = signal<string>(this.loadFromCache());
  readonly appTitle = this._appTitle.asReadonly();

  private loadFromCache(): string {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY) ?? DEFAULT_TITLE;
    } catch {
      return DEFAULT_TITLE;
    }
  }

  private saveToCache(title: string): void {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, title);
    } catch {
      // localStorage unavailable — preference won't persist
    }
  }

  async loadFromDb(): Promise<void> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) {
        return;
      }

      const { data, error } = await this.supabaseService.supabase
        .from('user_preferences')
        .select('app_title')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      const title = data?.app_title ?? DEFAULT_TITLE;
      this._appTitle.set(title);
      this.saveToCache(title);
    } catch {
      // Keep the cached value on failure
    }
  }

  async saveTitle(newTitle: string): Promise<void> {
    const trimmed = newTitle.trim();
    if (!trimmed) {
      return;
    }

    try {
      const user = await this.supabaseService.getUser();
      if (!user) {
        return;
      }

      const { error } = await this.supabaseService.supabase
        .from('user_preferences')
        .upsert(
          { user_id: user.id, app_title: trimmed, updated_at: new Date().toISOString() },
          { onConflict: 'user_id' }
        );

      if (error) {
        throw error;
      }

      this._appTitle.set(trimmed);
      this.saveToCache(trimmed);
      this.toastr.success('App title updated');
    } catch (error: any) {
      this.toastr.error(`Failed to save title: ${error?.message ?? error}`);
    }
  }

  reset(): void {
    this._appTitle.set(DEFAULT_TITLE);
    this.saveToCache(DEFAULT_TITLE);
  }
}
