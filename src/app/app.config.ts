import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
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
  ],
};
