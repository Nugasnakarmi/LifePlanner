import { createReducer, on } from '@ngrx/store';
import { BoardTemplateState } from './board-template.state.interface';
import * as actions from './board-template.actions';

export const initialState: BoardTemplateState = {
  templates: [],
  loading: false,
  saving: false,
  error: null,
};

export const boardTemplateReducer = createReducer(
  initialState,

  on(actions.loadBoardTemplates, (state) => ({ ...state, loading: true, error: null })),
  on(actions.loadBoardTemplatesSuccess, (state, { templates }) => ({
    ...state,
    templates,
    loading: false,
  })),
  on(actions.loadBoardTemplatesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(actions.saveBoardTemplate, (state) => ({ ...state, saving: true, error: null })),
  on(actions.saveBoardTemplateSuccess, (state, { template }) => ({
    ...state,
    saving: false,
    templates: [template, ...state.templates],
  })),
  on(actions.saveBoardTemplateFailure, (state, { error }) => ({
    ...state,
    saving: false,
    error,
  })),

  on(actions.deleteBoardTemplateSuccess, (state, { dbId }) => ({
    ...state,
    templates: state.templates.filter((t) => t.dbId !== dbId),
  }))
);
