import { createReducer, on } from '@ngrx/store';
import { UserTemplateState } from './user-template.state.interface';
import * as actions from './user-template.actions';

export const initialState: UserTemplateState = {
  templates: [],
  loading: false,
  saving: false,
  error: null,
};

export const userTemplateReducer = createReducer(
  initialState,

  on(actions.loadUserTemplates, (state) => ({ ...state, loading: true, error: null })),
  on(actions.loadUserTemplatesSuccess, (state, { templates }) => ({
    ...state,
    templates,
    loading: false,
  })),
  on(actions.loadUserTemplatesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(actions.saveUserTemplate, (state) => ({ ...state, saving: true, error: null })),
  on(actions.saveUserTemplateSuccess, (state, { template }) => ({
    ...state,
    saving: false,
    templates: [template, ...state.templates],
  })),
  on(actions.saveUserTemplateFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(actions.deleteUserTemplateSuccess, (state, { dbId }) => ({
    ...state,
    templates: state.templates.filter((t) => t.dbId !== dbId),
  }))
);
