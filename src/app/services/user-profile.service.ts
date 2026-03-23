import { inject, Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase/supabase.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { UserPreferences } from '../interfaces/user-preferences.interface';

const AVATAR_BUCKET = 'avatars';

const ALLOWED_IMAGE_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]);

const MAX_AVATAR_SIZE = 5 * 1024 * 1024; // 5 MB

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  private _profile = signal<UserPreferences | null>(null);
  readonly profile = this._profile.asReadonly();

  async loadProfile(): Promise<UserPreferences | null> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return null;

      const { data, error } = await this.supabaseService.supabase
        .from('user_preferences')
        .select('user_id, app_title, display_name, address, avatar_url, updated_at')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        this._profile.set(data);
        return data;
      }
      return null;
    } catch (error: any) {
      this.toastr.error(`Failed to load profile: ${error?.message ?? error}`);
      return null;
    }
  }

  async saveProfile(updates: { display_name?: string; address?: string; avatar_url?: string }): Promise<boolean> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return false;

      const { error } = await this.supabaseService.supabase
        .from('user_preferences')
        .upsert(
          { user_id: user.id, ...updates },
          { onConflict: 'user_id' }
        );

      if (error) throw error;

      const current = this._profile();
      this._profile.set({
        ...current,
        user_id: user.id,
        app_title: current?.app_title ?? 'LifePlanner',
        ...updates,
      });
      this.toastr.success('Profile updated');
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to save profile: ${error?.message ?? error}`);
      return false;
    }
  }

  async uploadAvatar(file: File): Promise<string | null> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return null;

      if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
        this.toastr.error('Only PNG, JPEG, GIF, and WebP images are allowed for avatars.');
        return null;
      }
      if (file.size > MAX_AVATAR_SIZE) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
        this.toastr.error(`Avatar is too large (${sizeMB} MB). Maximum size is 5 MB.`);
        return null;
      }

      const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
      const key = `${user.id}/avatar.${ext}`;

      const { error } = await this.supabaseService.supabase.storage
        .from(AVATAR_BUCKET)
        .upload(key, file, { contentType: file.type, upsert: true });

      if (error) throw error;

      const publicUrl = `${environment.SUPABASE_URL}/storage/v1/object/public/${AVATAR_BUCKET}/${key}?t=${Date.now()}`;

      await this.saveProfile({ avatar_url: publicUrl });

      return publicUrl;
    } catch (error: any) {
      this.toastr.error(`Avatar upload failed: ${error?.message ?? error}`);
      return null;
    }
  }

  async removeAvatar(): Promise<boolean> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return false;

      const current = this._profile();
      if (!current?.avatar_url) return true;

      const prefix = `/storage/v1/object/public/${AVATAR_BUCKET}/`;
      const idx = current.avatar_url.indexOf(prefix);
      if (idx !== -1) {
        let key = current.avatar_url.substring(idx + prefix.length);
        const qIdx = key.indexOf('?');
        if (qIdx !== -1) key = key.substring(0, qIdx);

        await this.supabaseService.supabase.storage
          .from(AVATAR_BUCKET)
          .remove([key]);
      }

      await this.saveProfile({ avatar_url: '' });
      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to remove avatar: ${error?.message ?? error}`);
      return false;
    }
  }
}
