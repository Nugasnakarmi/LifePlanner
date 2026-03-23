import { createReducer, on } from '@ngrx/store';
import { UserProfileState } from './user-profile.state.interface';
import * as actions from './user-profile.actions';

export const initialState: UserProfileState = {
  profile: null,
  loading: false,
  saving: false,
  error: null,
};

export const userProfileReducer = createReducer(
  initialState,

  on(actions.loadUserProfile, (state) => ({ ...state, loading: true, error: null })),
  on(actions.loadUserProfileSuccess, (state, { profile }) => ({
    ...state,
    profile,
    loading: false,
  })),
  on(actions.loadUserProfileNotFound, (state) => ({
    ...state,
    profile: null,
    loading: false,
  })),
  on(actions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    profile: null,
    loading: false,
    error,
  })),

  on(actions.saveUserProfile, (state) => ({ ...state, saving: true, error: null })),
  on(actions.saveUserProfileSuccess, (state, { profile }) => ({
    ...state,
    profile,
    saving: false,
  })),
  on(actions.saveUserProfileFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(actions.uploadAvatar, (state) => ({ ...state, saving: true, error: null })),
  on(actions.uploadAvatarSuccess, (state, { avatar_url }) => ({
    ...state,
    profile: state.profile ? { ...state.profile, avatar_url } : state.profile,
    saving: false,
  })),
  on(actions.uploadAvatarFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(actions.removeAvatar, (state) => ({ ...state, saving: true, error: null })),
  on(actions.removeAvatarSuccess, (state) => ({
    ...state,
    profile: state.profile ? { ...state.profile, avatar_url: '' } : state.profile,
    saving: false,
  })),
  on(actions.removeAvatarFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(actions.clearUserProfile, () => initialState)
);
