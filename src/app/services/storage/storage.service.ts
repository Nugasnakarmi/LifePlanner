import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

const BUCKET = 'activity-media';
const STORAGE_PATH_PREFIX = `/storage/v1/object/public/${BUCKET}/`;

const ALLOWED_MIME_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
  'video/mp4',
  'video/webm',
  'video/quicktime',
]);

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

const MIME_TO_EXT: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'image/heif': 'heif',
  'video/mp4': 'mp4',
  'video/webm': 'webm',
  'video/quicktime': 'mov',
};

/** Fallback: derive MIME type from file extension when the browser leaves file.type empty */
const EXT_TO_MIME: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
  heic: 'image/heic',
  heif: 'image/heif',
  mp4: 'video/mp4',
  webm: 'video/webm',
  mov: 'video/quicktime',
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  /**
   * Resolves the effective MIME type for a file.
   * Mobile browsers sometimes leave file.type empty; fall back to the extension.
   */
  resolveMimeType(file: File): string {
    // Some mobile browsers set type to empty or 'application/octet-stream'; fall back to extension
    if (file.type && file.type !== 'application/octet-stream') return file.type;
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    return EXT_TO_MIME[ext] ?? file.type ?? '';
  }

  /**
   * Validates a file before upload. Returns an error message or null if valid.
   */
  validateFile(file: File): string | null {
    const mime = this.resolveMimeType(file);
    if (!ALLOWED_MIME_TYPES.has(mime)) {
      return `"${file.name}" has an unsupported type (${mime || 'unknown'}). Allowed: images, GIFs, and videos.`;
    }
    if (file.size > MAX_FILE_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      return `"${file.name}" is too large (${sizeMB} MB). Maximum size is 50 MB.`;
    }
    return null;
  }

  /**
   * Uploads a file to the activity-media bucket.
   * Returns the public URL of the uploaded file.
   */
  async uploadFile(file: File, userId: string): Promise<string | null> {
    try {
      const mime = this.resolveMimeType(file);
      const dotIdx = file.name.lastIndexOf('.');
      const ext = dotIdx > 0 ? file.name.substring(dotIdx + 1).toLowerCase() : (MIME_TO_EXT[mime] ?? '');
      const key = ext
        ? `${userId}/${Date.now()}-${crypto.randomUUID()}.${ext}`
        : `${userId}/${Date.now()}-${crypto.randomUUID()}`;

      const { error } = await this.supabaseService.supabase.storage
        .from(BUCKET)
        .upload(key, file, { contentType: mime || undefined });

      if (error) {
        throw error;
      }

      // Return the Supabase public URL for the object
      return `${environment.SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${key}`;
    } catch (error: any) {
      this.toastr.error(`Upload failed: ${error?.message ?? error}`);
      return null;
    }
  }

  /**
   * Deletes a file from the activity-media bucket by its public URL.
   */
  async deleteFile(publicUrl: string): Promise<boolean> {
    try {
      const idx = publicUrl.indexOf(STORAGE_PATH_PREFIX);
      if (idx === -1) return false;

      const key = publicUrl.substring(idx + STORAGE_PATH_PREFIX.length);

      const { error } = await this.supabaseService.supabase.storage
        .from(BUCKET)
        .remove([key]);

      if (error) {
        throw error;
      }

      return true;
    } catch (error: any) {
      this.toastr.error(`Delete failed: ${error?.message ?? error}`);
      return false;
    }
  }

  /**
   * Deletes multiple files from the activity-media bucket by their public URLs.
   * Best-effort: logs errors but does not throw so callers can continue cleanup.
   */
  async deleteFiles(publicUrls: string[]): Promise<void> {
    const keys = publicUrls
      .map((url) => {
        const idx = url.indexOf(STORAGE_PATH_PREFIX);
        return idx === -1 ? null : url.substring(idx + STORAGE_PATH_PREFIX.length);
      })
      .filter((key): key is string => key !== null);

    if (keys.length === 0) return;

    try {
      const { error } = await this.supabaseService.supabase.storage
        .from(BUCKET)
        .remove(keys);

      if (error) {
        console.error('Failed to delete media files:', error);
      }
    } catch (error) {
      console.error('Failed to delete media files:', error);
    }
  }

  /**
   * Accepted file types for the file picker.
   * Uses broad categories so mobile browsers show all compatible photos/videos
   * (e.g. HEIC on iOS) instead of filtering them out.
   */
  get acceptedTypes(): string {
    return 'image/*,video/*';
  }

  /** Derives the media type from a MIME type */
  getMediaType(mime: string): 'image' | 'gif' | 'video' {
    if (mime === 'image/gif') return 'gif';
    if (mime.startsWith('video/')) return 'video';
    return 'image';
  }
}
