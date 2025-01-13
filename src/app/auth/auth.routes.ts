import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

export const authRoutes: Routes = [
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(
        (mod) => mod.RegisterComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (mod) => mod.ForgotPasswordComponent
      ),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then(
        (mod) => mod.ResetPasswordComponent
      ),
  },
  {
    path: 'verify',
    canActivate: [AuthGuard],
    data: { role: 'reader' },
    loadComponent: () =>
      import('./verify-email/verify-email.component').then(
        (mod) => mod.VerifyEmailComponent
      ),
  },
];
