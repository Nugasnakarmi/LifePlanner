import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserProfileState } from './user-profile.state.interface';

export const selectUserProfileFeature =
  createFeatureSelector<UserProfileState>('user-profile');

export const selectUserProfile = createSelector(
  selectUserProfileFeature,
  (state) => state.profile
);

export const selectUserProfileLoading = createSelector(
  selectUserProfileFeature,
  (state) => state.loading
);

export const selectUserProfileSaving = createSelector(
  selectUserProfileFeature,
  (state) => state.saving
);
