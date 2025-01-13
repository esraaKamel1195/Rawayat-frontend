import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (
  request,
  next,
  authService: AuthService = inject(AuthService)
) => {
  const token = authService.getToken();

  console.log('token from auth.interceptor', token);
  if (token) {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
  }
  return next(request);
}
