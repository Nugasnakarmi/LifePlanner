# LifePlanner — NgRx Store Architecture

This document describes the Redux/NgRx state management architecture used in the LifePlanner Angular application.

---

## Overview

State is managed with [NgRx](https://ngrx.io/) (Angular's Redux implementation). There are **6 independent feature slices**, each owning its own state, actions, reducer, effects, and selectors. All feature stores are registered in `src/app/app.config.ts`.

---

## Directory Structure

```
src/app/store/
├── board/
│   ├── board.actions.ts
│   ├── board.effects.ts
│   ├── board.reducer.ts
│   ├── board.selector.ts
│   └── board.state.interface.ts
├── board-list/
│   ├── board-list.actions.ts
│   ├── board-list.effects.ts
│   ├── board-list.reducer.ts
│   ├── board-list.selector.ts
│   └── board-list.state.interface.ts
├── board-template/
│   ├── board-template.actions.ts
│   ├── board-template.effects.ts
│   ├── board-template.reducer.ts
│   ├── board-template.selector.ts
│   └── board-template.state.interface.ts
├── task/                          # Two co-located sub-features: task + activity
│   ├── task.actions.ts
│   ├── task.effects.ts
│   ├── task.reducer.ts
│   ├── task.selector.ts
│   ├── task.state.interface.ts
│   ├── activity.actions.ts
│   ├── activity.effects.ts
│   ├── activity.reducer.ts
│   ├── activity.selector.ts
│   └── activity.state.interface.ts
├── user-profile.actions.ts        # user-profile files live at root of store/
├── user-profile.effects.ts
├── user-profile.reducer.ts
├── user-profile.selector.ts
└── user-profile.state.interface.ts
```

---

## Feature Slices

### `board` — Store key: `'board'`

```typescript
interface BoardState {
  boards: Board[];
  selectedBoard: Board | null;
  loading: boolean;
}
```

**Actions** (10): `addBoard`, `loadBoards`, `loadBoardsSuccess/Failure`, `boardEdited`, `boardEditedSuccessfully/Failed`, `selectBoard`, `deleteBoard`, `deleteBoardSuccess/Failure`, `createBoardFromTemplate`

**Effects** (5): `addBoard$`, `loadBoards$`, `boardEdited$`, `deleteBoard$`, `createBoardFromTemplate$`

`loadBoards$` is triggered by `taskActions.landingPageInitialized` (cross-feature).

---

### `board-list` — Store key: `'board-list'`

```typescript
interface BoardListState {
  lists: BoardList[];
  allLists: BoardList[];
  loading: boolean;
}
```

**Actions** (11): `loadBoardLists`, `loadAllBoardListsForUser`, `clearBoardLists`, `addBoardList`, `renameBoardList`, `deleteBoardList` (each with `Success/Failure` variants)

---

### `board-template` — Store key: `'board-template'`

```typescript
interface BoardTemplateState {
  templates: BoardTemplate[];
  loading: boolean;
  saving: boolean;   // separate from loading for granular UI feedback
  error: string | null;
}
```

**Actions** (9): `loadBoardTemplates`, `saveBoardTemplate`, `deleteBoardTemplate` (each with `Success/Failure` variants)

**Side effect**: On `saveBoardTemplateSuccess`, `BoardTemplateEffects.clearTemplateDraft$` clears `DIALOG_CACHE_KEYS.CREATE_TEMPLATE` via `DialogFormCacheService`.

---

### `idea-task` — Store key: `'idea-task'`

```typescript
interface TaskState {
  tasks: IdeaTask[];
  loading: boolean;
}
```

**Actions** (18): `landingPageInitialized` (trigger for all data loading), `loadTaskSuccess/Failure`, `taskWasAdded/AddedSuccessfully/AddFailed`, `taskWasUpdated/UpdatedSuccessfully/UpdateFailed`, `taskWasDeleted/DeletedSuccessfully/DeletionFailed`, `taskStatusUpdated/SuccessfullyUpdated/UpdateFailed`, `taskCompletionStatusUpdated/SuccessfullyUpdated/UpdateFailed`

**Cross-cutting**: The task reducer also responds to actions from other slices:
- `activityActions.*` — updates `completion_status` when activities change
- `boardActions.deleteBoardSuccess` — cascading task removal
- `boardListActions.deleteBoardListSuccess` — cascading task removal

**Trigger pattern**: Views dispatch `taskService.landingPageInitialized()` in `ngOnInit()` to kick off all data loading across board, board-list, task, and board-template effects.

---

### `activity` — Store key: `'activity'`

Co-located with `task/` but registered as an independent slice. Activities are stored in a **flat array** (`TaskScopedActivity[]`) and linked to tasks via a `task_activities` bridge table in the database.

```typescript
interface ActivityState {
  activities: TaskScopedActivity[];
  loading: boolean;
}
```

**Actions** (18): `loadActivities/Success/Failure`, `clearActivities`, `addActivityToTask/Success/Failure`, `updateActivity/Success/Failure`, `removeActivityFromTask/Success/Failure`, `deleteActivity/Success/Failure`, `toggleActivityComplete/Success/Failure`

**Computed selector**:
```typescript
selectActivityProgress  // → { total, completed, percentage, allCompleted }
```

**Side effect** (no dispatch):
```typescript
clearActivityDraft$ = createEffect(
  () => this.actions$.pipe(
    ofType(activityActions.addActivityToTaskSuccess),
    tap(() => this.formCache.clear(DIALOG_CACHE_KEYS.ACTIVITY_FORM))
  ),
  { dispatch: false }
);
```

---

### `user-profile` — Store key: `'user-profile'`

```typescript
interface UserProfileState {
  profile: UserPreferences | null;
  loading: boolean;
  saving: boolean;   // distinct flag for save/upload operations
  error: string | null;
}
```

**Actions** (13): `loadUserProfile/Success/NotFound/Failure`, `saveUserProfile/Success/Failure`, `uploadAvatar/Success/Failure`, `removeAvatar/Success/Failure`, `clearUserProfile`

---

## Store Registration (`app.config.ts`)

```typescript
providers: [
  provideStore(),
  provideState({ name: 'idea-task',      reducer: tasksReducer }),
  provideState({ name: 'board',          reducer: boardsReducer }),
  provideState({ name: 'board-template', reducer: boardTemplateReducer }),
  provideState({ name: 'board-list',     reducer: boardListsReducer }),
  provideState({ name: 'activity',       reducer: activityReducer }),
  provideState({ name: 'user-profile',   reducer: userProfileReducer }),
  provideEffects([
    TaskEffects,
    BoardEffects,
    BoardListEffects,
    BoardTemplateEffects,
    ActivityEffects,
    UserProfileEffects,
  ]),
  provideStoreDevtools({ maxAge: 25 }),
]
```

---

## Conventions & Patterns

### Action naming

```
'[Entity] Description'
```

Examples:
```typescript
'[Boards] Create Board button was clicked'  // user-initiated
'[Boards] Load Boards'                       // request started
'[Boards] Load Boards Success'               // API succeeded
'[Tasks] Task Was Added'                     // past-tense event
```

### Effects use Promises (not Observables)

All API services return Promises. Effects wrap them with `.then().catch()`:

```typescript
mergeMap(({ board }) =>
  this.boardAPIService
    .editBoard(board)
    .then((updated) => updated
      ? boardActions.boardEditedSuccessfully({ board: updated })
      : boardActions.boardEditFailed({ error: 'Failed to update board' })
    )
    .catch((error) => boardActions.boardEditFailed({ error }))
)
```

### `switchMap` vs `mergeMap`

- **`switchMap`** — use when only the latest request matters (e.g., `loadActivities$`, where navigating to a new task should cancel the previous load).
- **`mergeMap`** — use for concurrent/independent operations (CRUD: add, update, delete).

### Side effects (`dispatch: false`)

Used for UI/cache cleanup that doesn't produce a new action:

```typescript
clearTemplateDraft$ = createEffect(
  () => this.actions$.pipe(
    ofType(boardTemplateActions.saveBoardTemplateSuccess),
    tap(() => this.formCache.clear(DIALOG_CACHE_KEYS.CREATE_TEMPLATE))
  ),
  { dispatch: false }
);
```

### Separate `loading` and `saving` flags

`user-profile` and `board-template` slices track these separately so the UI can show a spinner during initial load while still displaying stale data, and a save indicator during writes.

### Auth flows do NOT use the store

Authentication (login, register, forgot password, reset password) calls Supabase auth APIs directly via services (`SupabaseService`, `RegisterService`, `ForgotPasswordService`). There is no NgRx auth slice — auth state is managed entirely by Supabase's session and surfaced through the `SupabaseService`.

---

## Adding a New Feature Slice

1. Create `src/app/store/<feature>/` with these 5 files:
   - `<feature>.state.interface.ts` — TypeScript interface for the state shape
   - `<feature>.actions.ts` — `createAction()` calls, following `'[Entity] Description'` naming
   - `<feature>.reducer.ts` — `createReducer()` with `on()` handlers
   - `<feature>.effects.ts` — `@Injectable()` class extending no base, `inject(Actions)` via constructor
   - `<feature>.selector.ts` — `createFeatureSelector()` + `createSelector()` calls

2. Register in `app.config.ts`:
   ```typescript
   provideState({ name: '<feature>', reducer: featureReducer }),
   // add FeatureEffects to the provideEffects([...]) array
   ```

3. Add a corresponding API service under `src/app/services/<feature>/` returning Promises.
