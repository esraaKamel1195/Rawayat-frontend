import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import {
  provideHttpClient,
  HTTP_INTERCEPTORS,
  withInterceptors,
  withFetch,
} from '@angular/common/http';
import { authInterceptor } from './services/auth/auth.interceptor';
import { AuthService } from './services/auth/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    importProvidersFrom([
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,
      NoopAnimationsModule,
      RouterModule.forRoot(routes)
    ]),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withFetch()),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
    DeviceDetectorService,
    AuthService,
  ],
};
