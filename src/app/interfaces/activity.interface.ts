export interface ActivityMedia {
  type: 'image' | 'gif' | 'video';
  url: string;
  name?: string;
}

export interface ActivityDataField {
  key: string;
  value: string;
}

export interface Activity {
  id?: number;
  name: string;
  data?: ActivityDataField[];
  media?: ActivityMedia[];
  user_id?: string;
  created_at?: string;
}

export interface TaskScopedActivity extends Activity {
  task_activity_id: number;
  position: number;
  completed?: boolean;
}
