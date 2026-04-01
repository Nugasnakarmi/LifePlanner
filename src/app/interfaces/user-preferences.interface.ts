export type BoardSortOption = 'name' | 'created_at' | 'updated_at';

export interface UserPreferences {
  user_id: string;
  app_title: string;
  display_name?: string;
  address?: string;
  avatar_url?: string;
  updated_at?: string;
  board_sort?: BoardSortOption;
}
