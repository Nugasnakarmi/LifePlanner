import { createAction, props } from '@ngrx/store';
import { UserPreferences } from 'src/app/interfaces/user-preferences.interface';
import { BoardSortOption } from 'src/app/interfaces/user-preferences.interface';

export const loadUserProfile = createAction('[User Profile] Load');

export const loadUserProfileSuccess = createAction(
  '[User Profile] Load Success',
  props<{ profile: UserPreferences }>()
);

export const loadUserProfileNotFound = createAction('[User Profile] Load Not Found');

export const loadUserProfileFailure = createAction(
  '[User Profile] Load Failure',
  props<{ error: any }>()
);

export const saveUserProfile = createAction(
  '[User Profile] Save',
  props<{ updates: { display_name?: string; address?: string; avatar_url?: string; board_sort?: BoardSortOption }; silent?: boolean }>()
);

export const saveUserProfileSuccess = createAction(
  '[User Profile] Save Success',
  props<{ profile: UserPreferences }>()
);

export const saveUserProfileFailure = createAction(
  '[User Profile] Save Failure',
  props<{ error: any }>()
);

export const uploadAvatar = createAction(
  '[User Profile] Upload Avatar',
  props<{ file: File }>()
);

export const uploadAvatarSuccess = createAction(
  '[User Profile] Upload Avatar Success',
  props<{ avatar_url: string }>()
);

export const uploadAvatarFailure = createAction(
  '[User Profile] Upload Avatar Failure',
  props<{ error: any }>()
);

export const removeAvatar = createAction('[User Profile] Remove Avatar');

export const removeAvatarSuccess = createAction('[User Profile] Remove Avatar Success');

export const removeAvatarFailure = createAction(
  '[User Profile] Remove Avatar Failure',
  props<{ error: any }>()
);

export const clearUserProfile = createAction('[User Profile] Clear');
