import { inject, Injectable } from '@angular/core';
import { SupabaseService } from './supabase/supabase.service';
import { StorageService } from './storage/storage.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { BoardSortOption, UserPreferences } from '../interfaces/user-preferences.interface';
import { InputSanitizerService } from './sanitizer/input-sanitizer.service';

const AVATAR_BUCKET = 'avatars';

const PROFILE_FIELDS = 'user_id, app_title, display_name, address, avatar_url, updated_at, board_sort';

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
export class UserProfileApiService {
  private supabaseService = inject(SupabaseService);
  private storageService = inject(StorageService);
  private toastr = inject(ToastrService);
  private sanitizer = inject(InputSanitizerService);

  async loadProfile(): Promise<UserPreferences | null> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return null;

      const { data, error } = await this.supabaseService.supabase
        .from('user_preferences')
        .select(PROFILE_FIELDS)
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) throw error;

      return data ?? null;
    } catch (error: any) {
      this.toastr.error(`Failed to load profile: ${error?.message ?? error}`);
      return null;
    }
  }

  async saveProfile(updates: { display_name?: string; address?: string; avatar_url?: string; board_sort?: BoardSortOption }, options?: { silent?: boolean }): Promise<UserPreferences | null> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return null;

      // Sanitize free-text fields; preserve avatar_url and board_sort as-is because they are constrained/validated elsewhere.
      const sanitizedUpdates = this.sanitizer.sanitizeObject(updates);
      if (updates.avatar_url !== undefined) {
        sanitizedUpdates.avatar_url = updates.avatar_url;
      }
      if (updates.board_sort !== undefined) {
        sanitizedUpdates.board_sort = updates.board_sort;
      }

      const { error } = await this.supabaseService.supabase
        .from('user_preferences')
        .upsert(
          { user_id: user.id, ...sanitizedUpdates },
          { onConflict: 'user_id' }
        );

      if (error) throw error;

      if (!options?.silent) {
        this.toastr.success('Profile updated');
      }

      // Reload the full profile after save
      const { data } = await this.supabaseService.supabase
        .from('user_preferences')
        .select(PROFILE_FIELDS)
        .eq('user_id', user.id)
        .maybeSingle();

      return data ?? null;
    } catch (error: any) {
      this.toastr.error(`Failed to save profile: ${error?.message ?? error}`);
      return null;
    }
  }

  async uploadAvatar(file: File): Promise<string | null> {
    try {
      const user = await this.supabaseService.getUser();
      if (!user) return null;

      // Use StorageService.resolveMimeType() for mobile browser MIME fallback
      const mime = this.storageService.resolveMimeType(file);

      if (!ALLOWED_IMAGE_TYPES.has(mime)) {
        this.toastr.error('Only PNG, JPEG, GIF, and WebP images are allowed for avatars.');
        return null;
      }
      if (file.size > MAX_AVATAR_SIZE) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
        this.toastr.error(`Avatar is too large (${sizeMB} MB). Maximum size is 5 MB.`);
        return null;
      }

      // Clean up any existing avatar objects to avoid orphaned files
      const { data: existingFiles, error: listError } = await this.supabaseService.supabase.storage
        .from(AVATAR_BUCKET)
        .list(user.id);

      if (!listError && existingFiles && existingFiles.length > 0) {
        const avatarFiles = existingFiles
          .filter((obj: any) => typeof obj.name === 'string' && obj.name.startsWith('avatar.'))
          .map((obj: any) => `${user.id}/${obj.name}`);

        if (avatarFiles.length > 0) {
          await this.supabaseService.supabase.storage
            .from(AVATAR_BUCKET)
            .remove(avatarFiles);
        }
      }

      const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
      const key = `${user.id}/avatar.${ext}`;

      const { error } = await this.supabaseService.supabase.storage
        .from(AVATAR_BUCKET)
        .upload(key, file, { contentType: mime, upsert: true });

      if (error) throw error;

      const publicUrl = `${environment.SUPABASE_URL}/storage/v1/object/public/${AVATAR_BUCKET}/${key}?t=${Date.now()}`;

      // Save the URL in user_preferences
      const { error: saveError } = await this.supabaseService.supabase
        .from('user_preferences')
        .upsert(
          { user_id: user.id, avatar_url: publicUrl },
          { onConflict: 'user_id' }
        );

      if (saveError) throw saveError;

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

      // Load current avatar_url to find the storage key
      const { data: profile } = await this.supabaseService.supabase
        .from('user_preferences')
        .select('avatar_url')
        .eq('user_id', user.id)
        .maybeSingle();

      if (profile?.avatar_url) {
        const prefix = `/storage/v1/object/public/${AVATAR_BUCKET}/`;
        const idx = profile.avatar_url.indexOf(prefix);
        if (idx !== -1) {
          let key = profile.avatar_url.substring(idx + prefix.length);
          const qIdx = key.indexOf('?');
          if (qIdx !== -1) key = key.substring(0, qIdx);

          const { error } = await this.supabaseService.supabase.storage
            .from(AVATAR_BUCKET)
            .remove([key]);

          if (error) throw error;
        }
      }

      const { error: saveError } = await this.supabaseService.supabase
        .from('user_preferences')
        .upsert(
          { user_id: user.id, avatar_url: '' },
          { onConflict: 'user_id' }
        );

      if (saveError) throw saveError;

      return true;
    } catch (error: any) {
      this.toastr.error(`Failed to remove avatar: ${error?.message ?? error}`);
      return false;
    }
  }
}
