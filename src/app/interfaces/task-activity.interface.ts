export interface TaskActivity {
  id?: number;
  task_id: number;
  activity_id: number;
  position?: number;
  completed?: boolean;
  created_at?: string;
}
