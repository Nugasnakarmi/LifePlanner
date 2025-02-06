import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { tasksReducer } from './state/task/task.reducer';
import { TaskEffects } from './state/task/task.effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// const composeEnhancers = composeWithDevTools({
//   realtime: true,
//   name: 'Your Instance Name',
//   hostname: 'localhost',
//   port: 1024, // the port your remotedev server is running at
// });

// const store = configureStore(
//   yourReducer,
//   composeEnhancers(applyMiddleware(/* put your middlewares here */))
// );

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideAnimations(), // required animations providers
    provideToastr({
      positionClass: 'toast-top-right', // Position of the toast
      closeButton: true,
      enableHtml: true,
      tapToDismiss: true, // Dismiss toast on click
      preventDuplicates: true,
    }),
    provideStore(),
    provideState({ name: 'task', reducer: tasksReducer }),
    provideEffects([TaskEffects]),
    provideStoreDevtools({ maxAge: 25 }), // Enable Redux DevTools
  ],
};
