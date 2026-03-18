-- Create the activity-media storage bucket (public, so images can be rendered directly)
INSERT INTO storage.buckets (id, name, public)
VALUES ('activity-media', 'activity-media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload files into their own folder
CREATE POLICY "Users can upload their own media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'activity-media'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );

-- Allow anyone to read public media (bucket is public)
CREATE POLICY "Public read access for activity media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'activity-media');

-- Allow authenticated users to delete their own media
CREATE POLICY "Users can delete their own media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'activity-media'
    AND (storage.foldername(name))[1] = auth.uid()::text
  );
