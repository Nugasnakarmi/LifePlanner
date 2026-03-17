export interface ActivityMedia {
  type: 'image' | 'gif' | 'video';
  url: string;
  name?: string;
}

export interface Activity {
  id?: number;
  name: string;
  data?: any[];
  media?: ActivityMedia[];
  user_id?: string;
  created_at?: string;
}
