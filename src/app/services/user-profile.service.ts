import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BoardSortOption, UserPreferences } from '../interfaces/user-preferences.interface';
import * as actions from '../store/user-profile.actions';
import {
  selectUserProfile,
  selectUserProfileLoading,
  selectUserProfileSaving,
} from '../store/user-profile.selector';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private store = inject(Store);

  profile$: Observable<UserPreferences | null> = this.store.select(selectUserProfile);
  loading$: Observable<boolean> = this.store.select(selectUserProfileLoading);
  saving$: Observable<boolean> = this.store.select(selectUserProfileSaving);

  loadProfile(): void {
    this.store.dispatch(actions.loadUserProfile());
  }

  saveProfile(updates: { display_name?: string; address?: string; avatar_url?: string; board_sort?: BoardSortOption }, silent?: boolean): void {
    this.store.dispatch(actions.saveUserProfile({ updates, silent }));
  }

  uploadAvatar(file: File): void {
    this.store.dispatch(actions.uploadAvatar({ file }));
  }

  removeAvatar(): void {
    this.store.dispatch(actions.removeAvatar());
  }

  clearProfile(): void {
    this.store.dispatch(actions.clearUserProfile());
  }
}

