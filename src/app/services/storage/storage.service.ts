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

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private supabaseService = inject(SupabaseService);
  private toastr = inject(ToastrService);

  private async getS3Client(): Promise<S3Client> {
    const session = await this.supabaseService.getSession();
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
        sessionToken: session?.access_token ?? '',
      },
    });
  }

  /**
   * Uploads a file to the activity-media bucket.
   * Returns the public URL of the uploaded file.
   */
  async uploadFile(file: File, userId: string): Promise<string | null> {
    try {
      const ext = file.name.split('.').pop() ?? '';
      const key = `${userId}/${Date.now()}-${crypto.randomUUID()}.${ext}`;

      const client = await this.getS3Client();
      const arrayBuffer = await file.arrayBuffer();

      await client.send(
        new PutObjectCommand({
          Bucket: BUCKET,
          Key: key,
          Body: new Uint8Array(arrayBuffer),
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
    return 'image/png,image/jpeg,image/gif,image/webp,video/mp4,video/webm';
  }

  /** Derives the media type from a MIME type */
  getMediaType(mime: string): 'image' | 'gif' | 'video' {
    if (mime === 'image/gif') return 'gif';
    if (mime.startsWith('video/')) return 'video';
    return 'image';
  }
}
