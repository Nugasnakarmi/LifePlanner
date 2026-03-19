import { inject, Injectable } from '@angular/core';
import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import { SupabaseService } from '../supabase/supabase.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

const PROJECT_REF = environment.SUPABASE_URL.replace('https://', '').split('.')[0];
const BUCKET = 'activity-media';

const ALLOWED_MIME_TYPES = new Set([
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
  'video/mp4',
  'video/webm',
]);

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB

const MIME_TO_EXT: Record<string, string> = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'video/mp4': 'mp4',
  'video/webm': 'webm',
};

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  private async getS3Client(): Promise<S3Client> {
    const session = await this.supabaseService.getSession();
    if (!session?.access_token) {
      throw new Error('Not authenticated. Please sign in and try again.');
    }
    // Supabase S3-compatible endpoint uses the project ref as accessKeyId
    // and the public anon key as secretAccessKey, with the user's JWT as session token.
    // See: https://supabase.com/docs/guides/storage/s3/authentication
    return new S3Client({
      forcePathStyle: true,
      region: 'ap-southeast-1',
      endpoint: `${environment.SUPABASE_URL}/storage/v1/s3`,
      credentials: {
        accessKeyId: PROJECT_REF,
        secretAccessKey: environment.SUPABASE_KEY,
        sessionToken: session.access_token,
      },
    });
  }

  /**
   * Validates a file before upload. Returns an error message or null if valid.
   */
  validateFile(file: File): string | null {
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return `"${file.name}" has an unsupported type (${file.type || 'unknown'}). Allowed: images, GIFs, and videos.`;
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
      const nameParts = file.name.split('.');
      const ext = nameParts.length > 1 ? nameParts.pop()! : (MIME_TO_EXT[file.type] ?? '');
      const key = ext
        ? `${userId}/${Date.now()}-${crypto.randomUUID()}.${ext}`
        : `${userId}/${Date.now()}-${crypto.randomUUID()}`;

      const client = await this.getS3Client();

      await client.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: key,
          Body: file as unknown as Blob,
          ContentType: file.type,
        })
      );

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
      const prefix = `/storage/v1/object/public/${BUCKET}/`;
      const idx = publicUrl.indexOf(prefix);
      if (idx === -1) return false;

      const key = publicUrl.substring(idx + prefix.length);
      const client = await this.getS3Client();

      await client.send(
        new DeleteObjectCommand({
          Bucket: BUCKET,
          Key: key,
        })
      );

      return true;
    } catch (error: any) {
      this.toastr.error(`Delete failed: ${error?.message ?? error}`);
      return false;
    }
  }

  /** Accepted file types for the file picker */
  get acceptedTypes(): string {
    return Array.from(ALLOWED_MIME_TYPES).join(',');
  }

  /** Derives the media type from a MIME type */
  getMediaType(mime: string): 'image' | 'gif' | 'video' {
    if (mime === 'image/gif') return 'gif';
    if (mime.startsWith('video/')) return 'video';
    return 'image';
  }
}
