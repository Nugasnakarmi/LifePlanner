# NgRx Store Skill — LifePlanner

Use this skill when adding or modifying NgRx Redux store state management in the LifePlanner application.

## Overview

LifePlanner uses NgRx v21 with the following packages:
- `@ngrx/store` — state container
- `@ngrx/effects` — side-effect handling (API calls)
- `@ngrx/store-devtools` — Redux DevTools integration

State is registered via `provideState` / `provideEffects` in `src/app/app.config.ts`.

---

## File Structure Convention

Each feature gets its own directory under `src/app/store/<feature>/`:

```
src/app/store/<feature>/
├── <feature>.state.interface.ts   — State shape
├── <feature>.actions.ts           — Action creators
├── <feature>.reducer.ts           — Pure state transitions
├── <feature>.effects.ts           — Side effects (API calls)
└── <feature>.selector.ts          — Memoized selectors
```

Existing examples:
- `src/app/store/board/` — board CRUD & selection
- `src/app/store/task/` — task CRUD
- `src/app/store/board-list/` — board list CRUD

---

## Step-by-Step: Adding a New Feature Store

### 1. State Interface

```typescript
// src/app/store/<feature>/<feature>.state.interface.ts
import { MyModel } from 'src/app/interfaces/my-model.interface';

export interface MyFeatureState {
  items: MyModel[];
  loading: boolean;
}
```

### 2. Actions

Use descriptive event-style names in the format `[Source] Event Description`.

```typescript
// src/app/store/<feature>/<feature>.actions.ts
import { createAction, props } from '@ngrx/store';
import { MyModel } from 'src/app/interfaces/my-model.interface';

export const loadItems = createAction('[MyFeature] Load Items');
export const loadItemsSuccess = createAction(
  '[MyFeature] Load Items Success',
  props<{ items: MyModel[] }>()
);
export const loadItemsFailure = createAction(
  '[MyFeature] Load Items Failure',
  props<{ error: any }>()
);

export const addItem = createAction('[MyFeature] Add Item', props<{ item: MyModel }>());
export const addItemSuccess = createAction('[MyFeature] Add Item Success', props<{ item: MyModel }>());
export const addItemFailure = createAction('[MyFeature] Add Item Failure', props<{ error: any }>());

export const updateItem = createAction('[MyFeature] Update Item', props<{ item: MyModel }>());
export const updateItemSuccess = createAction('[MyFeature] Update Item Success', props<{ item: MyModel }>());
export const updateItemFailure = createAction('[MyFeature] Update Item Failure', props<{ error: any }>());

export const deleteItem = createAction('[MyFeature] Delete Item', props<{ itemId: number }>());
export const deleteItemSuccess = createAction('[MyFeature] Delete Item Success', props<{ itemId: number }>());
export const deleteItemFailure = createAction('[MyFeature] Delete Item Failure', props<{ error: any }>());
```

### 3. Reducer

```typescript
// src/app/store/<feature>/<feature>.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { MyFeatureState } from './<feature>.state.interface';
import * as myActions from './<feature>.actions';

export const initialState: MyFeatureState = {
  items: [],
  loading: false,
};

export const myFeatureReducer = createReducer(
  initialState,
  on(myActions.loadItems, (state) => ({ ...state, loading: true })),
  on(myActions.loadItemsSuccess, (state, { items }) => ({ ...state, items, loading: false })),
  on(myActions.loadItemsFailure, (state) => ({ ...state, loading: false })),
  on(myActions.addItemSuccess, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(myActions.updateItemSuccess, (state, { item }) => ({
    ...state,
    items: state.items.map((i) => (i.id === item.id ? item : i)),
  })),
  on(myActions.deleteItemSuccess, (state, { itemId }) => ({
    ...state,
    items: state.items.filter((i) => i.id !== itemId),
  }))
);
```

### 4. Effects

Effects handle async operations (API calls). Use `mergeMap` with promise chaining following the existing pattern in this codebase.

```typescript
// src/app/store/<feature>/<feature>.effects.ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs';
import { MyApiService } from 'src/app/services/my-feature/my-feature.api.service';
import * as myActions from './<feature>.actions';

@Injectable()
export class MyFeatureEffects {
  myApiService = inject(MyApiService);

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.loadItems),
      mergeMap(() =>
        this.myApiService
          .getItems()
          .then((items) => myActions.loadItemsSuccess({ items }))
          .catch((error) => myActions.loadItemsFailure({ error }))
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(myActions.addItem),
      mergeMap(({ item }) =>
        this.myApiService
          .addItem(item)
          .then((added) =>
            added
              ? myActions.addItemSuccess({ item: added })
              : myActions.addItemFailure({ error: 'Failed to add item' })
          )
          .catch((error) => myActions.addItemFailure({ error }))
      )
    )
  );

  // ... deleteItem$, updateItem$ follow the same pattern

  constructor(private actions$: Actions) {}
}
```

### 5. Selectors

```typescript
// src/app/store/<feature>/<feature>.selector.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MyFeatureState } from './<feature>.state.interface';

export const selectMyFeature = createFeatureSelector<MyFeatureState>('my-feature');

export const selectItems = createSelector(selectMyFeature, (state) => state.items);
export const selectLoading = createSelector(selectMyFeature, (state) => state.loading);
```

### 6. Register in app.config.ts

```typescript
// src/app/app.config.ts
import { myFeatureReducer } from './store/<feature>/<feature>.reducer';
import { MyFeatureEffects } from './store/<feature>/<feature>.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... existing providers ...
    provideState({ name: 'my-feature', reducer: myFeatureReducer }),
    provideEffects([/* existing effects */, MyFeatureEffects]),
  ],
};
```

---

## Service Layer Pattern

Components do **not** inject `Store` directly. Instead, a thin service wraps the store:

```typescript
// src/app/services/<feature>/<feature>.service.ts
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MyModel } from 'src/app/interfaces/my-model.interface';
import * as myActions from 'src/app/store/<feature>/<feature>.actions';
import { selectItems } from 'src/app/store/<feature>/<feature>.selector';

@Injectable({ providedIn: 'root' })
export class MyFeatureService {
  private store = inject(Store);

  items$: Observable<MyModel[]> = this.store.select(selectItems);

  loadItems(): void {
    this.store.dispatch(myActions.loadItems());
  }

  addItem(item: MyModel): void {
    this.store.dispatch(myActions.addItem({ item }));
  }

  updateItem(item: MyModel): void {
    this.store.dispatch(myActions.updateItem({ item }));
  }

  deleteItem(itemId: number): void {
    this.store.dispatch(myActions.deleteItem({ itemId }));
  }
}
```

Components inject the service (not the Store):

```typescript
export class MyComponent {
  myService = inject(MyFeatureService);
  items$ = this.myService.items$; // Observable from store selector

  ngOnInit(): void {
    this.myService.loadItems(); // dispatches action
  }

  add(item: MyModel): void {
    this.myService.addItem(item); // dispatches action
  }
}
```

---

## Conventions

- **Feature name** (used in `provideState` and `createFeatureSelector`) must be a kebab-case string, e.g. `'board-list'`, `'idea-task'`, `'board'`.
- **Action type string format**: `[FeatureName] Descriptive Past/Present Tense Event`
- **Reducers** are pure functions — no side effects, no API calls.
- **Effects** handle all async work. Use `mergeMap` for concurrent operations or `switchMap` when only the latest matters.
- **Selectors** are memoized — always use `createSelector` and `createFeatureSelector`.
- **API service** (`*.api.service.ts`) handles raw Supabase calls; the NgRx service layer (`*.service.ts`) only dispatches/selects.
